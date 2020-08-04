import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logotype from "../images/Logotype.svg"

const Header = () => (
  <header>
    <img src={Logotype} />

    <div className="links-ctr">
      <Link to="/culture" activeStyle={{ color: "red" }}>
        CULTURE + TRIBE
      </Link>
      <Link to="/culture" activeStyle={{ color: "red" }}>
        CAREERS
      </Link>
      <Link to="/culture" activeStyle={{ color: "red" }}>
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
