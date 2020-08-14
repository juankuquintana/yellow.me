import React from "react"
import PropTypes from "prop-types"

import "../styles/_menu.scss"

const Menu = ({ isMenuOpen, toggleMenu }) => (
  <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
    <div className="overlay-menu">
      <nav className="menu__items-container">
        
        <a style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} href="/">
          About
        </a>
        <a style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} href="/culture">
          Tribe + Culture
        </a>
        <a style={{transitionDelay: isMenuOpen ? '.41s' : '.3s' }} className={`menu__link ${isMenuOpen ? 'animate' : ''}`} href="/contact">
          Contact
        </a>
            
      </nav>
      <div className="menu__social-links-container">
        <a className="menu__social-links-container__social-link" target="_blank" href="">
          Instagram
        </a>
        <a className="menu__social-links-container__social-link" target="_blank" href="">
          Dribbble
        </a>
      </div>
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
