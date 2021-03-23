import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import seafood from "../images/seafood.jpg"

export default function Seafood() {
  const data = useStaticQuery(graphql`
    query Seafood {
      sea: file(relativePath: { eq: "seafood.jpg" }) {
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
            fluid={data.sea.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={seafood} />
        </div>
      </div>
    </section>
  )
}
