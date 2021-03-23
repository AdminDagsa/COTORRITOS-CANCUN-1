import React from "react"
import SEO from "../components/seo"
import Navbar_en from "../components/navbar_en"
import Footer from "../components/footer"
import Dishes from "../components/dishes"
import "../css/style.css"

const DishesPage = () => (
  <>
    <SEO title="Dishes" />
    <Navbar_en />
    <Dishes />
    <div className="footer-3">
      <Footer />
    </div>
  </>
)

export default DishesPage
