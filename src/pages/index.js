import React from "react"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Footer from "../components/footer"
import "../css/style.css"
import Popup1 from "../components/popup1"

const IndexPage = () => (
  <>
    <SEO title="Menú" />
    <Popup1 />
    <Menu />
    <div className="footer-1">
      <Footer />
    </div>
  </>
)

export default IndexPage
