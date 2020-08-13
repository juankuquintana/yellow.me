import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import Logotype from "../images/Logotype.svg"

import Menu from "../components/menu";

const Header = () => {
  const [isMenuOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isMenuOpen)
  }

  return (
    <header>
      <img src={Logotype} />

      <div className="links-ctr">
        <Link to="/culture" activeClassName="selected">
          CULTURE + TRIBE
        </Link>
        <Link to="/careers" activeClassName="selected">
          CAREERS
        </Link>
        <Link to="/contact" activeClassName="selected">
          CONTACT
        </Link>
      </div>

      <div className="links-ctr-toogle-menu">
        <div className={`menu__icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className={`line-1`}></span>
          <span className={`line-1`}></span>
          <span className={`line-1`}></span>
        </div>  
        <Menu 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>

    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
