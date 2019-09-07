import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'

 
//import components and scss
// import "../styles/layout.scss"
import style from "../styles/work.module.scss"


const Work = ({ children }) => {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }`)

  return (
    <div className={style.workContainer} id="work">
      <h1 className={style.workHeader}>Work</h1>
      <div className={style.eachWorkContainer}>
        <div className={style.workImgContainer}>
          <Img fluid={data.allImageSharp.edges[5].node.fluid} />
        </div>
        <div className={style.workDescContainer}>
          <h2 className={style.workTitle}>Bidly</h2>
          <p className={style.workTechstack}>Express Node PostgreSQL React</p>
          <p className={style.workDescription}>Bidly is a strategy game based auctioning app that allows users to buy and sell items <br />
          Login with email: anna@gmail.com password: pass123 to see full functions</p>
          <a href="https://bidlyy.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faEye} />View live</a>
          <a href="https://github.com/asucarlos/bidly" target="_blank"><FontAwesomeIcon icon={faGithubSquare} />See code</a>
        </div>
        </div>
        <div className={style.eachWorkContainer}>
        <div className={style.workImgContainer}>
          <Img fluid={data.allImageSharp.edges[4].node.fluid} />
        </div>
        <div className={style.workDescContainer}>
          <h2 className={style.workTitle}>Tweeter</h2>
          <p className={style.workTechstack}>Express Node MongoDB EJS</p>
          <p className={style.workDescription}>Tweeter is a full-stack twitter clone app which allows users to tweet</p>
          <a href="https://tweeter-aska.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faEye} />View live</a>
          <a href="https://github.com/asucarlos/tweeter" target="_blank"><FontAwesomeIcon icon={faGithubSquare} />See code</a>
        </div>
        </div>
        <div className={style.eachWorkContainer}>
        <div className={style.workImgContainer}>
        <Img fluid={data.allImageSharp.edges[2].node.fluid} />
        </div>
        <div className={style.workDescContainer}>
          <h2 className={style.workTitle}>Jungle</h2>
          <p className={style.workTechstack}>Ruby on Rails PostgreSQL Stripe</p>
          <p className={style.workDescription}>Jungle is a mini e-commerce application built with Ruby on Rails</p>
          {/* <a href="https://tweeter-aska.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faEye} />View live</a> */}
          <a href="https://github.com/asucarlos/jungle-rails" target="_blank"><FontAwesomeIcon icon={faGithubSquare} />See code</a>
        </div>
        </div>
      </div>
  )
}

export default Work