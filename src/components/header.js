import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import Logotype from "../images/Logotype.svg"

import Menu from "../components/menu";

const Header = () => {
  const [isMenuOpen, setOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  useEffect(() => {enableScrolling(); watchScrolling();}, []);

  const disableScrolling = () => {
    let scrollX = window.scrollX;
    let crollY = window.scrollY;
    window.onscroll=function(){window.scrollTo(scrollX, crollY);};
  }

  const enableScrolling = () => {
    window.onscroll=function(){};
  }

  const watchScrolling = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      
      if (currentScrollPos > prevScrollpos) {
        if (currentScrollPos > 250)
          setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      prevScrollpos = currentScrollPos;
    }
  }

  const toggleMenu = () => {
    if (isMenuOpen === false){
      disableScrolling()
    } else {
      enableScrolling();
      watchScrolling();
    }
    setOpen(!isMenuOpen)
  }

  return (
    <header className={`${isMenuOpen ? 'menu-open' : ''} ${isScrollingDown ? 'header-hide' : ''}`}>
      <Link to="/" className="yellowme-logo">
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
        <Link to="/careers" activeClassName="selected">
          CAREERS
        </Link>
        <Link to="/contact" className="bg-yellow CTA">
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
