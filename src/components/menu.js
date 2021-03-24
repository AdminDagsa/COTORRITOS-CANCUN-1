import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import us from "../images/usa.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Menu() {
  return (
    <section className="menu-area">
      <div className="menu-div">
        <Link className="link-button" to="/alimentos">
          <button className="menu-button">Menú</button>
        </Link>
        <Link className="link-button" to="/mariscos">
          <button className="menu-button">Mariscos</button>
        </Link>
        <Link className="link-button" to="/bebidas">
          <button className="menu-button">Bebidas</button>
        </Link>
        <Link className="link-button" to="/litros">
          <button className="menu-button">Cotolitros</button>
        </Link>
        <div className="grid-container-icons">
          <Link
            className="link-scl"
            to="https://www.facebook.com/Cotorritos-Canc%C3%BAn-101460131946969"
            target="_blank"
          >
            <img className="menu-scl" alt="" src={fb} />
          </Link>
          <Link
            className="link-scl"
            to="https://www.instagram.com/cotorritoscancun/"
            target="_blank"
          >
            <img className="menu-scl" alt="" src={ins} />
          </Link>
          <div></div>
          <Link className="link-img" to="/en">
            <img className="menu-img" alt="" src={us} />
          </Link>
        </div>
      </div>
    </section>
  )
}
