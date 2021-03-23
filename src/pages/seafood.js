import React from "react"
import SEO from "../components/seo"
import Navsea from "../components/navsea"
import Seafood from "../components/seafood"
import Footer from "../components/footer"
import "../css/style.css"

const SeafoodPage = () => (
  <>
    <SEO title="Seafood" />
    <Navsea />
    <Seafood />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default SeafoodPage
