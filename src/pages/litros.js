import React from "react"
import SEO from "../components/seo"
import Litro from "../components/litro"
import Footer from "../components/footer"
import "../css/style.css"
import NavLitro from "../components/navlitro"

const LitrosPage = () => (
  <>
    <SEO title="Litros" />
    <NavLitro />
    <Litro />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default LitrosPage
