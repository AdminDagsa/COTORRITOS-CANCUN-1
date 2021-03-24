import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import mar from "../images/marisco.png"
import bebidas from "../images/bebidas.png"
import jarra from "../images/jarra.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Navbar_en() {
  return (
    <section className="navbar-area">
      <div className="grid-container-navbar">
        <Link
          className="link-scl"
          to="https://www.facebook.com/Cotorritos-Canc%C3%BAn-101460131946969"
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
          <Link className="link-button" to="/liters">
            <img className="navbar-icon" alt="" src={jarra} />
          </Link>
        </div>
        <Link
          className="link-scl"
          to="https://www.instagram.com/cotorritoscancun/"
          target="_blank"
        >
          <img className="menu-scl-nav" alt="" src={ins} />
        </Link>
      </div>
    </section>
  )
}
