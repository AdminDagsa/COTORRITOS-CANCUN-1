import React from "react"
import NavShots from "../components/navshots"
import SEO from "../components/seo"
import Shots from "../components/shots"
import Footer from "../components/footer"
import "../css/style.css"

const ShotsPage = () => (
  <>
    <SEO title="Shots" />
    <NavShots />
    <Shots />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default ShotsPage
