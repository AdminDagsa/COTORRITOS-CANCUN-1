import * as React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Menuen from "../components/menuen"
import "../css/style.css"

const EnPage = () => (
  <>
    <SEO title="Menu" />
    <Menuen />
    <div className="footer-1">
      <Footer />
    </div>
  </>
)

export default EnPage
