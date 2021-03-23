import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import drink from "../images/drinks.jpg"

export default function Drinks() {
  const data = useStaticQuery(graphql`
    query Drinks {
      drinks: file(relativePath: { eq: "drinks.jpg" }) {
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
              fluid={data.drinks.childImageSharp.fluid}
            />
          </div>
          <div className="drink-div">
            <img className="drink-area-alimentos-2" alt="" src={drink} />
          </div>
        </div>
      </div>
    </section>
  )
}
