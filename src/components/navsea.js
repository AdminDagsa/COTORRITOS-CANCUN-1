import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import alimento from "../images/food.png"
import bebidas from "../images/bebidas.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Navsea() {
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
          <Link className="link-button" to="/dishes">
            <img className="navbar-icon" alt="" src={alimento} />
          </Link>
          <Link className="link-button" to="/drinks">
            <img className="navbar-icon" alt="" src={bebidas} />
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
