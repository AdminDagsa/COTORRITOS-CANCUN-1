import * as React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import mx from "../images/mxn.png"
import fb from "../images/fb.png"
import ins from "../images/ins.png"

export default function Menuen() {
  return (
    <section className="menu-area">
      <div className="menu-div">
        <Link className="link-button" to="/dishes">
          <button className="menu-button">Menu</button>
        </Link>
        <Link className="link-button" to="/seafood">
          <button className="menu-button">Seafood</button>
        </Link>
        <Link className="link-button" to="/drinks">
          <button className="menu-button">Drinks</button>
        </Link>
        <Link className="link-button" to="/liters">
          <button className="menu-button">Liters</button>
        </Link>
        <Link className="link-button" to="/shot">
          <button className="menu-button">Shots</button>
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
          <Link className="link-img" to="/">
            <img className="menu-img" alt="" src={mx} />
          </Link>
        </div>
      </div>
    </section>
  )
}
