import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Menu_en from "../components/menu_en"
import "../css/style.css"

const EnPage = () => (
  <>
    <SEO title="Menu" />
    <Menu_en />
    <div className="footer-1">
      <Footer />
    </div>
  </>
)

export default EnPage
