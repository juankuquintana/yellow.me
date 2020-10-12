import React from "react"

import EmailIcon from "../images/email-icon.svg"
import LinkedinIcon from "../images/linkedin-icon.svg"
import MediumIcon from "../images/medium-icon.svg"
import InstagramIcon from "../images/instagram-icon.svg"
import FacebookIcon from "../images/facebook-icon.svg"
import GithubIcon from "../images/github-icon.svg"
import DribbbleIcon from "../images/dribbble-icon.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="divider" />

      <div className="footer--find-us">
        Find us
      </div>
      <div className="footer--social-icons">
        <a target="_blank" href="mailto:hello@yellow.me"><img src={EmailIcon}/></a>
        <a target="_blank" href="https://www.linkedin.com/company/yellowme/"><img src={LinkedinIcon} /></a>
        <a target="_blank" href="https://medium.com/yellowme"><img src={MediumIcon} /></a>
        <a target="_blank" href="https://www.instagram.com/yellowmemx/"><img src={InstagramIcon} /></a>
        <a target="_blank" href="https://www.facebook.com/yellowmemx/"><img src={FacebookIcon} /></a>
        <a target="_blank" href="https://github.com/yellowme"><img src={GithubIcon} /></a>
        <a target="_blank" href="https://dribbble.com/yellowme"><img src={DribbbleIcon} /></a>
      </div>

    </div>
  )
}

export default Footer
