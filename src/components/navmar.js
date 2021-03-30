import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import alimento from "../images/food.png"
import bebidas from "../images/bebidas.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"
import jarra from "../images/jarra.png"
import shot from "../images/shot.png"

export default function Navmar() {
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
          <Link className="link-button" to="/alimentos">
            <img className="navbar-icon" alt="" src={alimento} />
          </Link>
          <Link className="link-button" to="/bebidas">
            <img className="navbar-icon" alt="" src={bebidas} />
          </Link>
          <Link className="link-button" to="/litros">
            <img className="navbar-icon" alt="" src={jarra} />
          </Link>
          <Link className="link-button" to="/shots">
            <img className="navbar-icon" alt="" src={shot} />
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
