/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import { fromPairs } from 'lodash'
import { ThemeProvider } from 'theme-ui'

import Header from './Header'
import Footer from './Footer1'

import './index.scss'

const Layout = ({ children, isHome, noHeader, noFooter }) => {
  const data = useStaticQuery(graphql`
    query ThemeQuery {
      contentfulTheme(title: { eq: "Default Theme" }) {
        colors {
          title
          color
        }
        fontSizes {
          title
          size
        }
        contentful_id
      }
    }
  `)

  const theme = {
    colors: fromPairs(data?.contentfulTheme?.colors?.map(({ title, color }) => [title.toLowerCase(), color])),
    fontSizes: fromPairs(data?.contentfulTheme?.fontSizes?.map(({ title, size }) => [title.toLowerCase(), size]))
  }
  
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <ThemeProvider theme={theme}>
      {!noHeader && (<Header isHome={isHome}/>)}
      <main>
        {children}
      </main>
      {!noFooter && (<Footer />)}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  noHeader: PropTypes.bool,
  noFooter: PropTypes.bool,
}

export default Layout
