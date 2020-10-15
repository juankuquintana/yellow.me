import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Footer from "../components/Footer";

import "../styles/menu.scss"

const Menu = ({ isMenuOpen, toggleMenu }) => (
  <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
    <div className="overlay-menu">
      <nav className="menu__items-container">
        
        <Link style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} to="/" activeClassName="selected">
          About Us
        </Link>
        <Link style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} to="/culture" activeClassName="selected">
          Tribe + Culture
        </Link>
        <Link style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} to="/careers" activeClassName="selected">
          Careers
        </Link>
        <Link style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} to="/contact" activeClassName="selected">
          Contact
        </Link>
            
        <Footer/>
      </nav>
      
    </div>
  </div>
)

Menu.propTypes = {
  isMenuOpen: PropTypes.bool,
}

Menu.defaultProps = {
  siteTitle: false,
}

export default Menu
