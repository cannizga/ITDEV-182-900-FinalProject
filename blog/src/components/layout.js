import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import GlobalStyle from './GlobalStyle'
import { Gray } from './ThemeGray/Gray'
import styled, { ThemeProvider } from "styled-components"
import React, { Fragment } from 'react'
import { Game } from '@styled-icons/crypto'

const Content = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 0 1.0875rem 1.45;
padding-top: 10px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <ThemeProvider theme={Gray}>
      <GlobalStyle/>
          <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <Content>
        <main>{children}</main>
        <footer
        style={{marginTop:  `2rem`, }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
