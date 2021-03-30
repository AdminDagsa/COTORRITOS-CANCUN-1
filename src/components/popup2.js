import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "../css/style.css"
import popup from "../images/popup.png"

export default function Popup1() {
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

  return <section className="popup2-section"></section>
}
