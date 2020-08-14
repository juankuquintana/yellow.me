import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/contact.scss"

import Footer from "../components/Footer"

import circle from "../images/circle.png";
import triangle from "../images/triangle.png";
import ArrowRotation from "../images/arrow-circle-rotation.svg"
import ArrowRight from "../images/arrow-right.svg"

//Culture icons
import Culture6 from "../images/culture/culture-6.png"

const ContactPage = () => {

  const [selectedOption, setSelectedOption] = useState("option2");

  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  };

  const handleOptionChange = (value) => {
    console.log("Value", value);
    setSelectedOption(value)
  }

  return(
    <Layout>
      <div className="client-card content-ctr">
        <h2>Tell us, we are all ears</h2>
        <div className="container">
          <div className="subscribe">
            <div>
              <img src={circle} height={47} width={46} style={{marginRight: 8}}/>
              <img src={triangle} height={47} width={46}/>
            </div>

            <span>Do you need support building or extending a product team?</span>
            <p>Schedule a discovery call</p>

            <div className="program-a-call">
              <span className="uppercase">Program a call</span>
              <button><img src={ArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="talent-card content-ctr">
        <div className="container">
          <div className="subscribe">
            <div>
              <img src={circle} height={47} width={46} style={{marginRight: 8}}/>
              <img src={triangle} height={47} width={46}/>
            </div>

            <span>Are you open to join us and work on exciting Silicon Valley level companies?</span>

            <div className="contact-form">
            
              <p>Tell us your name</p>
              <input type="text" name="name" placeholder="Your Name"/>

              <p>What’s your email?</p>
              <input type="email" name="email" placeholder="Your email"/>

              <p>And you are?</p>
              <form onSubmit={handleFormSubmit}>

              

              <input className="checkbox-tools" type="radio" name="tools" id="tool-1" value="option1" checked={selectedOption === "option1"} />
                <label className="for-checkbox-tools" onClick={() => handleOptionChange("option1")}>
                  <div className="radio-button-inside">
                    <img src={Culture6}/>
                    <p>Designer</p>
                  </div>
                </label>

              <input className="checkbox-tools" type="radio" name="tools" id="tool-2" value="option2" checked={selectedOption === "option2"} />
                <label className="for-checkbox-tools" onClick={() => handleOptionChange("option2")}>
                  <div className="radio-button-inside">
                    <img src={Culture6}/>
                    <p>Engineer</p>
                  </div>
                </label>

              <input className="checkbox-tools" type="radio" name="tools" id="tool-3" value="option3" checked={selectedOption === "option3"} />
                <label className="for-checkbox-tools" onClick={() => handleOptionChange("option3")}>
                  <div className="radio-button-inside">
                    <img src={Culture6}/>
                    <p>Other</p>
                  </div>
                </label>

                

              </form>

              <p>Paid professional experience</p>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>

            </div>


            <div className="program-a-call">
              <span className="uppercase">Send form</span>
              <button><img src={ArrowRight} /></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </Layout>  
  )
  
}

export default ContactPage
