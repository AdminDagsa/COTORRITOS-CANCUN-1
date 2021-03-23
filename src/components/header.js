import React from "react"
import { Link } from "gatsby"
import "../css/style.css"
import logo from "../images/logo.png"
import placa from "../images/placa.png"
import hojai from "../images/hoja-i.png"
import hojad from "../images/hoja-d.png"

export default function Header() {
  return (
    <header className="header-area">
      <div className="div-relative">
        <img className="placa-image" alt="" src={placa} />
        <Link className="link-image" to="/">
          <img className="logo-image" alt="" src={logo} />
        </Link>
        <img className="hojad-image" alt="" src={hojad} />
        <img className="hojai-image" alt="" src={hojai} />
      </div>
    </header>
  )
}
