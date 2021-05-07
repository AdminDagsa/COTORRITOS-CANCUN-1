import * as React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import menu from "../images/menu.jpg"
import Marisco from "../images/mariscos.jpg"
import placa from "../images/placa.png"

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
    <section>
      <div className="drink-area-alimentos">
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
      <img className="placa-image-drink" alt="" src={placa} />
      <div className="drink-area-alimentos" id="mariscos">
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
