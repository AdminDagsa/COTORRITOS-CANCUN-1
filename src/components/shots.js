import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import shot from "../images/shots.jpg"

export default function Shots() {
  const data = useStaticQuery(graphql`
    query Shots2 {
      shots: file(relativePath: { eq: "shots.jpg" }) {
        childImageSharp {
          fluid {
            src
            srcWebp
            aspectRatio
            base64
          }
        }
      }
    }
  `)

  return (
    <section className="drink-area">
      <div className="grid-container-courses">
        <div className="grid-item-courses">
          <Img
            className="drink-image"
            alt=""
            fluid={data.shots.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={shot} />
        </div>
      </div>
    </section>
  )
}
