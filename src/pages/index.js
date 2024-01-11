import * as React from 'react'

import ConceptList from '../components/ConceptList'

import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
	const data = useStaticQuery(
		graphql`
			query HomepageTOC {
				site {
					siteMetadata {
						title
					}
				}
				allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
					edges {
						node {
							id
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
	)
	console.log(data)
	return (
		<ConceptList
			title="Lista de conceptos"
			content={data.allMarkdownRemark.edges}
		/>
	)
}

export default IndexPage

// export function Head() {
// 	return (
// 		<>
// 			<link
// 				href="https://fonts.cdnfonts.com/css/futura-std-4"
// 				rel="stylesheet"
// 			></link>
// 		</>
// 	)
// }
