import React from "react"
import SEO from "../components/seo"
import Bebidas from "../components/bebidas"
import NavDrink from "../components/navdrink"
import Footer from "../components/footer"
import "../css/style.css"

const BebidasPage = () => (
  <>
    <SEO title="Bebidas" />
    <NavDrink />
    <Bebidas />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default BebidasPage
