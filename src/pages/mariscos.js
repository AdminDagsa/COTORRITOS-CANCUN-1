import React from "react"
import SEO from "../components/seo"
import Navmar from "../components/navmar"
import Footer from "../components/footer"
import "../css/style.css"
import Mariscos from "../components/mariscos"

const MariscosPage = () => (
  <>
    <SEO title="Mariscos" />
    <Navmar />
    <Mariscos />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default MariscosPage
