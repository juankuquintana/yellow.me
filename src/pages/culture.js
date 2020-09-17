import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import GoogleSheets from "../utils/googleSheets";

import Layout from "../components/layout"
import "../styles/culture.scss"

import PhotosGrid from "../components/PhotosGrid"
import ValuesList from "../components/ValuesList"
import Yellows from "../components/Yellows";

import SendIcon from "../images/button-send.svg"
import SendedIcon from "../images/button-sended.svg"

import Footer from "../components/Footer"

import NewsletterIcon from "../images/culture/newsletter-icon.png"

const CulturePage = () => {

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const typeEmail = (event) => {
    setEmail(event.target.value);
  };

  const subscribeNewsletter = () => {
    GoogleSheets.subscribeNewsletter(email).then(()=>{
      setEmailSent(true);
    })
  }

  return (
    <Layout>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <title>Tribe + Culture</title>
      </Helmet>

      <div className="join-a-culture-section df-cc df-column">
        <h2 className="">Join a culture of permanent <br/> work-in-progress.</h2>
      </div>

      <PhotosGrid sectionNumber={1}/>

      <div className="principles-section">
        <div className="section--left">
          <h6 className="statement">
          Over the last 7 years, we’ve been learning from our wins and losses. 
          Every person and experience have shaped our culture, and we expect that to continue forever.
          </h6>
        </div>

        <div className="section--right">
          <h2>Every voice matters.</h2>
          <p>
          We don’t believe hierarchies mean much in our industry. 
          At Yellowme we are a community of committed designers and engineers with a shared value system. 
          We reject bureaucracy and believe in simple and thoughtful processes.
          </p>
          <div className="divider" />

          <h2>Be a leader.</h2>
          <p>
          Leadership is not management. Leadership starts with one’s self and never ends. 
          A true leader inspires their peers, apprentices, other leaders and the community at large.
          </p>
          <div className="divider" />

          <h2>Commit wholeheartedly.</h2>
          <p>
          We don’t simply place you on a project. 
          Yellowme makes sure that you are fully committed to the purpose of the client you’re working with and deeply care about the challenge ahead.
          </p>
          <div className="divider" />

          <h2>Become one with our clients.</h2>
          <p>
          We are not an agency or a dev shop. We build real world teams. 
          This means putting the work alongside our clients to establish the tools, process, mindset and camaraderie that make a group successful in the long run.
          </p>
        </div>
      </div>

      <PhotosGrid sectionNumber={2}/>

      <div className="we-are-our-values-section">
        <div className="section--left">
          <h2 className="statement">We are our values</h2>
        </div>

        <div className="section--right">
          <p>
          The team has grown, our model has continuously evolved but our core values remain the same. 
          If anything, we’re always looking to strengthen them by bringing the best possible people to work with us.</p>
        </div>
      </div>
      
      <ValuesList />

      <Yellows />

      <div className="subscribe-section df-cc df-column">
        <h2>We are constantly posting new <br/>job opportunities</h2>
        <div className="subscribe">

          <div>
            <img src={NewsletterIcon} />
          </div>

          <div className="form-email">
            <span>Subscribe to our job opportunity feed</span>
            <div>
              <span className={`suscribed ${emailSent ? '' : 'hidden'}`}>You’ve been suscribed! 🥳</span>
              <input className={`email-input ${emailSent ? 'hidden' : ''}`} type="text" name="email" placeholder="Your email here" onChange={typeEmail}/>
              <div className="send-email">
                <span>We send one email per week maximum</span>
                <img src={!emailSent ? SendIcon : SendedIcon} onClick={subscribeNewsletter}/>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </Layout>
  )
}

export default CulturePage
