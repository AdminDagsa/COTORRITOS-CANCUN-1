import React from "react"
import SEO from "../components/seo"
import Drinks from "../components/drinks"
import NavDrinks from "../components/navdrinks"
import Footer from "../components/footer"
import "../css/style.css"

const DrinksPage = () => (
  <>
    <SEO title="Bebidas" />
    <NavDrinks />
    <Drinks />
    <div className="footer-2">
      <Footer />
    </div>
  </>
)

export default DrinksPage
