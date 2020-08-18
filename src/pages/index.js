import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/home.scss"

import ClientsList from "../components/ClientsList"
import Footer from "../components/Footer"

import ArrowRightBlack from "../images/arrow-right-black.svg"
import Yellowme from "../images/home/yellowme-home.gif"

const IndexPage = () => (
  <Layout>
    <div className="hero content-ctr-thin">
      <div className="hero--ctr">
        <div className="hero--sentence">
          Commit. <br />
          Ship. <br />
          Enjoy. <br />
        </div>
        <h5>
          Hi, we’re Yellowme <div className="hand-emoji">👋</div>
        </h5>
        <p>Your own design and engineering team</p>
      </div>
    </div>

    <div className="bg-medium-grey">
      <div className="section-1 content-ctr">
        <div className="section-1--left">
          <h6 className="statement">
            Working with us is simple
          </h6>
        </div>

        <div className="section-1--right">
          <h2>Stage doesn’t matter.</h2>
          <p>
            We don’t care if you just raised a massive Series B or if you’re
            bootstrapping an MVP.
          </p>
          <div className="divider" />

          <h2>Fame doesn’t matter. </h2>
          <p>
            We take pride in working with companies on the rise who aren’t
            household names, yet.
          </p>
          <div className="divider" />

          <h2>Industry doesn’t matter. </h2>
          <p>
            We love a good challenge and we’ve been lucky to find them
            everywhere from banking to education.
          </p>
        </div>
      </div>
    </div>

    <div className="yellow-section bg-medium-yellow full-screen df-cc df-column ta-c content-ctr">
      <h2>Mission does matter.</h2>
      <p>
        We strive to work with strong leaders who inspire a shared sense of
        purpose.
      </p>
    </div>

    <ClientsList />

    <div className="testimonial-ctr bg-light-grey full-screen df-column content-ctr">
      <h2>
        “[Yellowme] has been there for us through ups and downs. I can’t believe
        it’s been three years already. You guys were there even before we had
        real money to spend.”
      </h2>
      <h5>Rahim Fazal</h5>
      <span>SV Academy</span>
    </div>


    <div className="yellowme-home-section df-cc df-column ta-c content-ctr">
      <img src={Yellowme}></img>
    </div>

    <div className="tell-us-section df-cc df-column ta-c content-ctr">
      <h2>Hey 👋 <br/> <br/>
      Tell us about your company, we're all ears
      </h2>
      <p>Drop us a line <a href="mailto:hello@yellow.me"><img src={ArrowRightBlack}/></a></p>
      <div className="divider" />
    </div>

    <div className="explore-oportunity-section df-cc df-column ta-c content-ctr">
      <h2>Explore a great opportunity for your career</h2>
      <p>Tribe + Culture <a href="/culture"><img src={ArrowRightBlack}/></a></p>
    </div>

    <div className="home-footer"><Footer /></div>
   
  </Layout>
)

export default IndexPage
