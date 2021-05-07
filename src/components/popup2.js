import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import close from "../images/close.png"

export default function Popup2() {
  const data = useStaticQuery(graphql`
    query Popup2 {
      popup: file(relativePath: { eq: "popup.png" }) {
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
    <section className="popup2-section">
      <input type="checkbox" id="cerrar2" />
      <label for="cerrar2" className="popup2-button">
        <img src={close} className="popup2-close" />
      </label>
      <div className="popup2-modal">
        <div className="popup2-content">
          <Img
            className="popup2-image"
            alt=""
            fluid={data.popup.childImageSharp.fluid}
          />
          <Link to="/litros" className="popup2-menu">
            <div className="div-btn"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
