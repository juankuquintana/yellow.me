import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import "../styles/careers.scss"

import Footer from "../components/Footer"

import CareersForm from "../components/CareersForm"

import TeamYellowPhotoJpg from "../images/careers/Team-Yellowme-Careers.jpg"
import TeamYellowPhotoWebp from "../images/careers/Team-Yellowme-Careers.webp"
import Illustration1 from "../images/careers/Careers-Page-Illustration-01.png";

const CareersPage = () => {
  const [isMenuOpen, setOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  useEffect(() => {enableScrolling(); watchScrolling();}, []);

  const disableScrolling = () => {
    let scrollX = window.scrollX;
    let crollY = window.scrollY;
    window.onscroll=function(){window.scrollTo(scrollX, crollY);};
  }

  const enableScrolling = () => {
    window.onscroll=function(){};
  }

  const watchScrolling = () => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      
      if (currentScrollPos > prevScrollpos) {
        if (currentScrollPos > 250)
          setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      prevScrollpos = currentScrollPos;
    }
  }

  const toggleMenu = () => {
    /*
    if (isMenuOpen === false){
      disableScrolling()
    } else {
      enableScrolling();
      watchScrolling();
    }
    */
    setOpen(!isMenuOpen)
  }
  
  return(
    <Layout>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <title>Careers</title>
      </Helmet>

      <div className={`${isMenuOpen ? 'display-none' : ''}`}>
        <div className="want-to-be-part-section">
          <h2>Get your ideal high-growth job.</h2>
          <p>It doesn’t matter if you’re looking for an immediate opportunity or if you’re happy with your job and simply exploring options.</p>
          <button to="/contact" className="button" onClick={toggleMenu}>
            CREATE PROFILE
          </button>
        </div>

        <div className="photo-section">
          <picture>
            <source srcSet={TeamYellowPhotoWebp} type="image/webp" />
            <source srcSet={TeamYellowPhotoJpg} type="image/jpeg" />
            
            <img srcSet={TeamYellowPhotoJpg} />
          </picture>
        </div>

        <div className="we-promise"> 
          <p className="title">We promise</p>
          <div className="cards-container">
            <div className={`card`}>
              <p>Above-market salaries because we know how much top talent worths.</p>
            </div>
            <div className={`card`}>
              <p>Interesting and challenging opportunities with Silicon Valley-minded companies.</p>
            </div>
            <div className={`card`}>
              <p>An award-winning culture focused on trust, communication and personal growth.</p>
            </div>
          </div>           
          
        </div>
        
        <div className="start-section">
          <div className="start-card">
            
              
              <img src={Illustration1}/>
              
              <div className="start-with-us ta-c">

                <span>If you ready to be part of our top-talent base, just answer this form</span>

                <button to="/contact" className="button" onClick={toggleMenu}>
                  START
                </button>

              </div>
            
          </div>
        </div>
      </div>

      <CareersForm 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      

    </Layout>  
  )
  
}

export default CareersPage
