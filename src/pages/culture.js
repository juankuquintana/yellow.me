import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/culture.scss"

import ValuesList from "../components/ValuesList"

import ArrowRotation from "../images/arrow-circle-rotation.svg"
import ArrowRight from "../images/arrow-right.svg"

import Footer from "../components/Footer"

import Culture6 from "../images/culture/culture-icon-6.png"

const CulturePage = () => (
  <Layout>
    
    <div className="join-a-culture-section df-cc df-column ta-c content-ctr">
      <h2 className="">Join a culture of permanent <br/> work-in-progress.</h2>
    </div>

    <div className="photos-grid-a">
      <div className="photos-wrapper-a">
        <div class="slot photo-1">1</div>
        <div class="slot photo-2">2</div>
        <div class="slot photo-3">3</div>
        <div class="slot photo-4">4</div>
        <div class="slot photo-5">5</div>
        <div class="slot photo-6">6</div>
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
        <div class="slot photo-1">1</div>
        <div class="slot photo-2">2</div>
        <div class="slot photo-3">3</div>
        <div class="slot photo-4">4</div>
        <div class="slot photo-5">5</div>
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
        <h2>Meet the yellows</h2>
        <div className="meet-yellows">

          <div className="yellow-photo">
            <img src={"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F98a933ad-7009-4968-8cf7-637c245c1a85%2FYELLOWME_retratos_albanyjalvarezfotografia_001.jpg?table=block&id=9e3973c8-ade4-4fc6-8b8f-b6fd43dedc71&width=2560&cache=v2"}/>
          </div>

          <div className="yellow-bio">
            <p className="yellow-name">Jorge Pintor</p>

            <div class="display-flex">
              <div class="yellow-role">
                <p className="caption">ROLE</p>
                <p className="value">Software Enginner</p>
              </div>

              <div class="yellow-exp">
                <p className="caption">EXP</p>
                <p className="value">7 Years</p>
              </div>
            </div>

            <div class="yellow-currently">
              <p className="caption">CURRENTLY</p>
              <p className="value">Working on the banking back-end of Enso</p>
            </div>

            <div class="yellow-scoop">
              <p className="caption">SCOOP</p>
              <p className="value">Loves telling jokes 🤡</p>
            </div>

            <div className="divider" />

            <div className="footer">
              <span>Yellowme is Jorge and 60 other amazing designers, engineers and product managers.</span>
              <button><img src={ArrowRotation} /></button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div>
      <div className="subscribe-section content-ctr">
        <h2>We are constantly posting new job opportunities</h2>
        <div className="subscribe">

          <div>
            <img src={Culture6} height={60} width={120} />
          </div>

          <div className="form-email">
            <span>Subscribe to our job opportunity feed</span>
            <div>
              <input className="email-input" type="text" name="email" placeholder="Your email here"/>
              <div className="send-email">
                <span>We send one email per week maximun</span>
                <button><img src={ArrowRight} /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <Footer />

  </Layout>
)

export default CulturePage
