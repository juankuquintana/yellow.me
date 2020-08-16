import React from "react"
import { Link } from "gatsby"

import EmailIcon from "../images/email-icon.svg"
import LinkedinIcon from "../images/linkedin-icon.svg"
import MediumIcon from "../images/medium-icon.svg"
import InstagramIcon from "../images/instagram-icon.svg"
import FacebookIcon from "../images/facebook-icon.svg"
import GithubIcon from "../images/github-icon.svg"
import DribbbleIcon from "../images/dribbble-icon.svg"

const Footer = () => {
  return (
    <div className="footer content-ctr">
      <div className="divider" />

      <div className="footer--find-us">
        Find us
      </div>
      <div className="footer--social-icons">
        <a href="mailto:hello@yellow.me"><img src={EmailIcon}/></a>
        <Link to="https://www.linkedin.com/company/yellowme/"><img src={LinkedinIcon} /></Link>
        <Link to="https://medium.com/yellowme"><img src={MediumIcon} /></Link>
        <Link to="https://www.instagram.com/yellowmemx/"><img src={InstagramIcon} /></Link>
        <Link to="https://www.facebook.com/yellowmemx/"><img src={FacebookIcon} /></Link>
        <Link to="https://github.com/yellowme"><img src={GithubIcon} /></Link>
        <Link to="https://dribbble.com/yellowme"><img src={DribbbleIcon} /></Link>
      </div>

    </div>
  )
}

export default Footer
