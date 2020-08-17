import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/culture.scss"

import ValuesList from "../components/ValuesList"
import Yellows from "../components/Yellows";

import SendIcon from "../images/button-send.svg"

import Footer from "../components/Footer"

import NewsletterIcon from "../images/culture/newsletter-icon.png"

const CulturePage = () => (
  <Layout>
    
    <div className="join-a-culture-section df-cc df-column content-ctr">
      <h2 className="">Join a culture of permanent <br/> work-in-progress.</h2>
    </div>

    <div className="photos-grid-a">
      <div className="photos-wrapper-a">
        <div class="slot photo-1"></div>
        <div class="slot photo-2"></div>
        <div class="slot photo-3"></div>
        <div class="slot photo-4"></div>
        <div class="slot photo-5"></div>
        <div class="slot photo-6"></div>
      </div>
    </div>

    <div className="principles-section">
      <div className="section-1 content-ctr">
        <div className="section-1--left">
          <h6 className="statement">
          Over the last 7 years, we’ve been learning from our wins and losses. 
          Every person and experience have shaped our culture, and we expect that to continue forever.
          </h6>
        </div>

        <div className="section-1--right">
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
    </div>

    <div className="photos-grid-b">
      <div className="photos-wrapper-b">
        <div class="slot photo-1"></div>
        <div class="slot photo-2"></div>
        <div class="slot photo-3"></div>
        <div class="slot photo-4"></div>
        <div class="slot photo-5"></div>
      </div>
    </div>

    <div className="we-are-our-values-section">
      <div className="section-1 content-ctr">
        <div className="section-1--left">
          <h2 className="statement">We are our values</h2>
        </div>

        <div className="section-1--right">
          <p>
          The team has grown, our model has continuously evolved but our core values remain the same. 
          If anything, we’re always looking to strengthen them by bringing the best possible people to work with us.</p>
        </div>
      </div>
    </div>
    
    <ValuesList />

    <div>
      <div className="meet-yellows-section content-ctr-thin">
        <h2>Meet the Yellows</h2>
          <Yellows />
      </div>
    </div>

    <div>
      <div className="subscribe-section df-cc df-column content-ctr">
        <h2>We are constantly posting new <br/>job opportunities</h2>
        <div className="subscribe">

          <div>
            <img src={NewsletterIcon} />
          </div>

          <div className="form-email">
            <span>Subscribe to our job opportunity feed</span>
            <div>
              <input className="email-input" type="text" name="email" placeholder="Your email here"/>
              <div className="send-email">
                <span>We send one email per week maximum</span>
                <img src={SendIcon} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="culture-footer"><Footer /></div>

  </Layout>
)

export default CulturePage
