import React from "react"
import "../css/style.css"
import cotorrito from "../images/cotorrito.png"
import direccion from "../images/direccion.png"
import placa from "../images/placa.png"
import hojai from "../images/hoja-i.png"
import hojad from "../images/hoja-d.png"

export default function Footer() {
  return (
    <section className="footer-area">
      <div className="div-relative-footer">
        <img className="hojai-image-footer" alt="" src={hojai} />
        <img className="hojad-image-footer" alt="" src={hojad} />
        <img className="placa-image-footer" alt="" src={placa} />
        <img className="cotorrito-image" alt="" src={cotorrito} />
        <img className="direccion-image" alt="" src={direccion} />
      </div>
    </section>
  )
}
