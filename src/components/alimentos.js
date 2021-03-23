import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import menu from "../images/menu.jpg"

export default function Alimentos() {
  const data = useStaticQuery(graphql`
    query Alimentos {
      menu: file(relativePath: { eq: "menu.jpg" }) {
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
            fluid={data.menu.childImageSharp.fluid}
          />
        </div>
        <div className="drink-div">
          <img className="drink-area-alimentos-2" alt="" src={menu} />
        </div>
      </div>
    </section>
  )
}
