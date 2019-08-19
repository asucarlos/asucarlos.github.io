import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import components and scss
// import "../styles/layout.scss"
import style from "../styles/work.module.scss"


const Work = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "Bidly_Homescreen.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
  return (
    <div className={style.workContainer}>
      <h1 className={style.workHeader}>Work</h1>
      <div className={style.eachWorkContainer}>
        <div className={style.workImgContainer}style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid}/>
        </div>
        <div className={style.workDescContainer}>
          <h2 className={style.workTitle}>Bidly</h2>
          <p className={style.workTechstack}>Express Node PostgreSQL React</p>
          <p className={style.workDescription}>Bidly is a full-stack strategy game based auctioning app that allows users to buy and sell items</p>
          <a href="https://bidlyy.herokuapp.com/">View live</a>
          <a href="https://github.com/asucarlos/bidly">See code</a>
        </div>
      </div>
    </div>
  )
}

export default Work