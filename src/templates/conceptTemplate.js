import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faAngleLeft,
	faAngleRight,
	faDice,
} from '@fortawesome/free-solid-svg-icons'

import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;

	margin-bottom: 40px;

	a {
		border: 1px solid red;
		text-decoration: none;
		padding: 12px 16px;
		color: #333;
		font-weight: 650;
		border-radius: 4px;
		border: 1px solid #d83334;

		span,
		svg {
			color: #d83334;
		}
	}
`

export default function Template(props) {
	let { markdownRemark, allMarkdownRemark } = props.data

	const { frontmatter, html } = markdownRemark
	console.log(frontmatter)
	const prevLink =
		frontmatter.order > 0 ? (
			<Link
				to={
					allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter.path
				}
			>
				<FontAwesomeIcon icon={faAngleLeft} />
				<span> {frontmatter.order.toString().padStart(2, '0')}.</span>
				{' ' +
					allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter
						.title +
					' '}
			</Link>
		) : (
			<span></span>
		)
	const nextLink =
		frontmatter.order + 1 < allMarkdownRemark.edges.length ? (
			<Link
				to={
					allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter.path
				}
			>
				<span>{(frontmatter.order + 2).toString().padStart(2, '0')}.</span>
				{' ' +
					allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter
						.title +
					' '}
				<FontAwesomeIcon icon={faAngleRight} />
			</Link>
		) : (
			<span></span>
		)

	return (
		<div className="lesson-container">
			<div className="lesson">
				<Nav>
					{prevLink}
					{nextLink}
				</Nav>

				<h1>{frontmatter.title}</h1>

				<div
					className="lesson-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</div>
	)
}

export const pageQuery = graphql`
	query ($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				order
			}
		}
		allMarkdownRemark(
			sort: { order: ASC, fields: [frontmatter___order] }
			limit: 1000
		) {
			edges {
				node {
					frontmatter {
						order
						path
						title
					}
				}
			}
		}
	}
`
