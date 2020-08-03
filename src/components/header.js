import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logotype from "../images/Logotype.svg"

const Header = () => (
  <header>
    <img src={Logotype} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
