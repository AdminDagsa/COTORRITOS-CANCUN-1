import React from "react"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import Alimentos from "../components/alimentos"
import Footer from "../components/footer"
import "../css/style.css"

const AlimentosPage = () => (
  <>
    <SEO title="Platillos" />
    <Navbar />
    <Alimentos />
    <div className="footer-3">
      <Footer />
    </div>
  </>
)

export default AlimentosPage
