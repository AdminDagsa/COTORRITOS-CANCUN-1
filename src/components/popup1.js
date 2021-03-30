import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import popup from "../images/popup.png"

export default function Popup1() {
  const data = useStaticQuery(graphql`
    query Popup {
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
    <section className="drink-area">
      <div>
        <div>
          <div>
            <Img
              className="drink-image"
              alt=""
              fluid={data.popup.childImageSharp.fluid}
            />
          </div>
          <div className="drink-div"></div>
        </div>
      </div>
    </section>
  )
}
