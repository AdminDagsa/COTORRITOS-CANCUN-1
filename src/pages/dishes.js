import React from "react"
import SEO from "../components/seo"
import Navbaren from "../components/navbaren"
import Footer from "../components/footer"
import Dishes from "../components/dishes"
import "../css/style.css"

const DishesPage = () => (
  <>
    <SEO title="Dishes" />
    <Navbaren />
    <Dishes />
    <div className="footer-3">
      <Footer />
    </div>
  </>
)

export default DishesPage
