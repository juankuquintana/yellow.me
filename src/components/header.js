import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Logotype from "../images/Logotype.svg"

import Menu from "../components/menu";

const Header = () => {
  const [isMenuOpen, setOpen] = useState(false);
  useEffect(() => enableScrolling(), []);

  const disableScrolling = () => {
    let scrollX = window.scrollX;
    let crollY = window.scrollY;
    window.onscroll=function(){window.scrollTo(scrollX, crollY);};
  }

  const enableScrolling = () => {
    window.onscroll=function(){};
  }

  const toggleMenu = () => {
    isMenuOpen === false ? disableScrolling() : enableScrolling();
    setOpen(!isMenuOpen)
  }

  return (
    <header>
      <Link to="/">
        <img src={Logotype}/>
      </Link>

      <div className="links-ctr-toogle-menu">
        <div className={`menu__icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className={`line-1`}></span>
          <span className={`line-1`}></span>
        </div>  
        <Menu 
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      </div>

      <div className="links-ctr">
        <Link to="/culture" activeClassName="selected">
          TRIBE + CULTURE
        </Link>
        {
        /*<Link to="/careers" activeClassName="selected">
          CAREERS
        </Link>*/
        }
        <Link to="/contact" className="bg-yellow CTA" activeClassName="selected">
          CONTACT
        </Link>
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
