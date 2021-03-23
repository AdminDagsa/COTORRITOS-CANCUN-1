import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import bebidas from "../images/bebidas.jpg"

export default function Bebidas() {
  const data = useStaticQuery(graphql`
    query Bebidas {
      bebidas: file(relativePath: { eq: "bebidas.jpg" }) {
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
      <div>
        <div>
          <div>
            <Img
              className="drink-image"
              alt=""
              fluid={data.bebidas.childImageSharp.fluid}
            />
          </div>
          <div className="drink-div">
            <img className="drink-area-alimentos-2" alt="" src={bebidas} />
          </div>
        </div>
      </div>
    </section>
  )
}
