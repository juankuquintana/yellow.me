import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logotype from "../images/Logotype.svg"

const Header = () => (
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
