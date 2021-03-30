import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import shot1 from "../images/shot.jpg"

export default function Shot() {
  const data = useStaticQuery(graphql`
    query Shot1 {
      shot: file(relativePath: { eq: "shot.jpg" }) {
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
            fluid={data.shot.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={shot1} />
        </div>
      </div>
    </section>
  )
}
