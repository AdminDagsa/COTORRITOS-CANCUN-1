import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import mar from "../images/marisco.png"
import bebidas from "../images/bebidas.png"
import shot from "../images/shot.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Navbar_en() {
  return (
    <section className="navbar-area">
      <div className="grid-container-navbar">
        <Link
          className="link-scl"
          to="https://www.facebook.com/cotorritoscdmx"
          target="_blank"
        >
          <img className="menu-scl-nav" alt="" src={fb} />
        </Link>
        <div className="grid-container-navbar-sec">
          <Link className="link-button" to="/seafood">
            <img className="navbar-icon" alt="" src={mar} />
          </Link>
          <Link className="link-button" to="/drinks">
            <img className="navbar-icon" alt="" src={bebidas} />
          </Link>
          <Link className="link-button" to="/shot">
            <img className="navbar-icon" alt="" src={shot} />
          </Link>
        </div>
        <Link
          className="link-scl"
          to="https://www.instagram.com/cotorritos_cdmx"
          target="_blank"
        >
          <img className="menu-scl-nav" alt="" src={ins} />
        </Link>
      </div>
    </section>
  )
}
