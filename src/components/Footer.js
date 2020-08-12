import React from "react"

import TtIcon from "../images/tt-icon.svg"
import FbIcon from "../images/fb-icon.svg"
import IgIcon from "../images/ig-icon.svg"
import MediumIcon from "../images/medium-icon.svg"

const Footer = () => {
  return (
    <div className="footer content-ctr">
      <div className="divider" />

      <div className="footer--find-us fw-700">
        Find us
      </div>
      <div className="footer--social-icons">
        <img src={TtIcon} />
        <img src={FbIcon} />
        <img src={IgIcon} />
        <img src={MediumIcon} />
      </div>

    </div>
  )
}

export default Footer
