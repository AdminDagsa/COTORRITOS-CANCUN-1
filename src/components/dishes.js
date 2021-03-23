import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import dishes from "../images/dishes.jpg"

export default function Dishes() {
  const data = useStaticQuery(graphql`
    query Dishes {
      dishes: file(relativePath: { eq: "dishes.jpg" }) {
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
            fluid={data.dishes.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={dishes} />
        </div>
      </div>
    </section>
  )
}
