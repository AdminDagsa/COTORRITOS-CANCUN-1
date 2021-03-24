import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import liters from "../images/liters.jpg"

export default function Liter() {
  const data = useStaticQuery(graphql`
    query Shots {
      drinks: file(relativePath: { eq: "liters.jpg" }) {
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
            fluid={data.drinks.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={liters} />
        </div>
      </div>
    </section>
  )
}
