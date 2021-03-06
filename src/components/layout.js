/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//import components
import Header from "./header"
import About from "./about"
import Work from "./works"
import Footer from "./footer"
import Contact from "./contact"

import "../styles/layout.scss"

const Layout = () => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default Layout
