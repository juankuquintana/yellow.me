import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/menu.scss"

const Menu = ({ isMenuOpen, toggleMenu }) => (
  <div className={`menu ${isMenuOpen ? 'menu--open' : ''}`}>
    <div className="overlay-menu">
      <nav className="menu__items-container">
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
