import React from 'react'

// import Helmet from 'react-helmet'
import { graphql, useStaticQuery, Link } from 'gatsby'

import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'

const Wrapper = styled.div``

const Header = styled.header`
	background-color: white;
	position: fixed;
	width: 100%;
	z-index: 4;
`

Header.Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1440px;
	padding: 16px 136px 9px;
	margin: 0 36px;
`

Header.Local = styled.div``

const Brand = () => (
	<Link to="/">
		<img
			src="https://tf-thebridge-production-public-files.s3.eu-west-1.amazonaws.com/the_bridge_logo_bc18d0b1dd.svg"
			width="136"
			alt="The Bridge Logo"
		/>
	</Link>
)
Header.Title = styled.h1`
	font-family: 'Futura Std', -apple-system, system-ui, sans-serif;
	margin: 0 36px;

	font-size: 16px;
	font-variant-numeric: tabular-nums;
	font-weight: 650;
	text-wrap: wrap;
	white-space-collapse: preserve-breaks;
	line-height: 36px;
`

Header.Subtitle = styled.h2`
	color: white;
	font-size: 16px;
	font-weight: 400;

	width: 100%;
	margin: 0;
	background-color: black;
	text-align: center;
	vertical-align: center;
	line-height: 64px;
	z-index: 4;

	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		text-decoration underline;
	}
`

const Badge = styled.p`
	color: #d83334;
	font-feature-settings: normal;
	font-kerning: auto;
	font-optical-sizing: auto;
	font-size: 16px;

	font-weight: 650;
	margin: 0;
`

const DinamicContent = styled.main`
	padding-top: 52px;
	max-width: 1440px;

	padding-top: 180px;
	padding: 180px 136px 50px;
`

// import 'bootstrap/dist/css/bootstrap.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'code-mirror-themes/themes/monokai.css'
// import './index.css'

const TemplateWrapper = ({ children }) => {
	const data = useStaticQuery(
		graphql`
			{
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<Wrapper>
			<Global
				styles={css`
					html {
						"box-sizing":border-box ;
					}
					,
					'*, *:before, *:after': {
						"box-sizing":inherit ;
					}
					,
					body {
						margin: 0;
						font-family: 'Futura Std', -apple-system, system-ui, sans-serif;
						font-size: 16px;
						font-weight: 400;
						text-wrap: wrap;
						line-height: 24px;
					}
				`}
			/>
			<Header>
				<Header.Main>
					<Brand />
					<Header.Title>PREWORK FULL STACK</Header.Title>
				</Header.Main>
				<Header.Local>
					<Header.Subtitle>
						<Link to="/">TABLA DE CONCEPTOS</Link>
					</Header.Subtitle>
				</Header.Local>
			</Header>

			<DinamicContent>{children}</DinamicContent>
		</Wrapper>
	)
}

export default TemplateWrapper
