import React from "react"
import NavShot from "../components/navshot"
import SEO from "../components/seo"
import Shot from "../components/shot"
import Footer from "../components/footer"
import "../css/style.css"

const ShotPage = () => (
  <>
    <SEO title="Shots" />
    <NavShot />
    <Shot />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default ShotPage
