import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import close from "../images/close.png"

export default function Popup1() {
  const data = useStaticQuery(graphql`
    query Popup1 {
      popup: file(relativePath: { eq: "popup2.png" }) {
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
    <section className="popup1-section">
      <input type="checkbox" id="cerrar" />
      <label for="cerrar" className="popup-button">
        <img src={close} className="popup1-close" />
      </label>
      <div className="popup1-modal">
        <div className="popup1-content">
          <Img
            className="popup1-image"
            alt=""
            fluid={data.popup.childImageSharp.fluid}
          />
          <Link to="/alimentos#mariscos" className="popup1-menu">
            <div className="div-btn"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}
