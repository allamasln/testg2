import React from 'react'
import { Link } from 'gatsby'

import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'

const List = styled.div`
	display: flex;
	gap: 16px;
	flex-direction: column;
	margin: 0;
	padding: 0;
`
const Concept = styled(Link)`
	border: 0px;
	outline: 0px;
	display: flex;
	gap: 16px;
	border-radius: 6px;
	padding: 16px;
	box-shadow: 0px 8px 40px rgba(51, 32, 32, 0.1);
	align-items: center;
	text-align: left;
	font-size: 20px;
	font-variant-numeric: tabular-nums;
	font-weight: 650;
	text-wrap: wrap;
	white-space-collapse: preserve-breaks;
	line-height: 36px;
	text-decoration: none;
	color: #333;

	span:first-child {
		color: #cb271f;
	}

	&:hover {
		box-shadow: 0px 8px 40px rgba(216, 51, 52, 0.2);
	}
`

const ConceptList = ({ content, title }) => (
	<List>
		{content.map((concept) => {
			const { order, path, title } = concept.node.frontmatter
			const paddedOrder = (order + 1).toString().padStart(2, '0')

			return (
				<Concept key={path} to={path}>
					<span>{paddedOrder}</span>

					<span>{title}</span>
				</Concept>
			)
		})}
	</List>
)

export default ConceptList
