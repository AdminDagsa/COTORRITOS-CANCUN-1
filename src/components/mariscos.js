import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import Marisco from "../images/mariscos.jpg"

export default function Mariscos() {
  const data = useStaticQuery(graphql`
    query Mariscos {
      mar: file(relativePath: { eq: "mariscos.jpg" }) {
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
    <section className="drink-area-alimentos">
      <div>
        <div>
          <Img
            className="drink-image"
            alt=""
            fluid={data.mar.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={Marisco} />
        </div>
      </div>
    </section>
  )
}
