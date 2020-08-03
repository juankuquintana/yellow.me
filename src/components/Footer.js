import React from "react"

import TtIcon from "../images/tt-icon.svg"
import FbIcon from "../images/fb-icon.svg"
import IgIcon from "../images/ig-icon.svg"
import MediumIcon from "../images/medium-icon.svg"

const Footer = () => {
  return (
    <div className="full-screen content-ctr">
      <h2 className="fw-200">
        Don't be shy, <br />
        <div className="fw-300">say hi.</div>
      </h2>
      <h2>👋</h2>
      <h2 className="footer--email">hi@yellow.me</h2>

      <h5 className="fw-500">Mérida</h5>
      <p>
        Baja California 284 p.8 <br />
        Hipódromo, 06100
      </p>

      <h5 className="fw-500">Mexico City</h5>
      <p>
        Baja California 284 p.8 <br />
        Hipódromo, 06100
      </p>

      <div className="footer--follow-us fw-500">
        Follow us
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
