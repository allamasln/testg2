module.exports = {
	pathPrefix: '/testg',
	siteMetadata: {
		title: 'The Bridge - Conceptos Full Stack (prework)',
	},
	trailingSlash: 'never',
	plugins: [
		`gatsby-plugin-layout`,
		'gatsby-plugin-emotion',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/concepts`,
				name: 'markdown-pages',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 800,
						},
					},
					{
						resolve: `gatsby-remark-interactive-gifs`,
						options: {
							root: `${__dirname}`,
							src: `${__dirname}/concepts/images`,
							dest: `${__dirname}/public/static/gifs`,
							play: `${__dirname}/concepts/images/play.png`,
							placeholder: `${__dirname}/concepts/images/placeholder.gif`,
							loading: `${__dirname}/concepts/images/loading.gif`,
							relativePath: `/static/gifs`,
						},
					},
				],
			},
		},
	],
}
