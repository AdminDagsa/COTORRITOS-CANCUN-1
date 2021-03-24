import React from "react"
import SEO from "../components/seo"
import Liter from "../components/liter"
import Footer from "../components/footer"
import "../css/style.css"
import NavLiter from "../components/navliter"

const LitersPage = () => (
  <>
    <SEO title="Liters" />
    <NavLiter />
    <Liter />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default LitersPage
