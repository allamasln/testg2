const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions

	const conceptTemplate = path.resolve(`src/templates/conceptTemplate.js`)

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___order] }
				limit: 1000
			) {
				edges {
					node {
						excerpt(pruneLength: 250)
						html
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
	`).then((result) => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}

		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: conceptTemplate,
			})
		})
	})
}
