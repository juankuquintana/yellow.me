import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/contact.scss"

import Footer from "../components/Footer"

import ArrowRight from "../images/arrow-right.svg"
//Culture icons
import Culture6 from "../images/culture/culture-icon-6.png"

const ContactPage = () => {

  const [selectedOption, setSelectedOption] = useState("Designer");
  const [selectInputExpand, setSelectInputExpand] = useState(false)
  const [yearsExperience, setYearsExperience] = useState("Select your experience");

  const handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  };

  const handleOptionChange = (value) => {
    setSelectedOption(value)
  }

  const handleYearsExperienceChange = (value) => {
    setYearsExperience(value);
  }

  const selectInputToogle = () => {
    setSelectInputExpand(!selectInputExpand);
  }

  return(
    <Layout>
      <div className="client-card content-ctr">
        <h2>Tell us, we are all ears</h2>
        <div className="container">
          <div className="subscribe">
            <div>
              <img src={Culture6} height={60} width={120}/>
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
              <img src={Culture6} height={60} width={120}/>
            </div>

            <span>Are you open to join us and work on exciting Silicon Valley level companies?</span>

            <div className="contact-form">
            
              <p>Tell us your name</p>
              <input type="text" name="name" placeholder="Your Name"/>

              <p>What’s your email?</p>
              <input type="email" name="email" placeholder="Your email"/>

              <p>And you are?</p>
              <form className="form-job-searched" onSubmit={handleFormSubmit}>
                <input className="checkbox-tools" type="radio" value="Designer" checked={selectedOption === "Designer"} />
                  <label className="for-checkbox-tools" onClick={() => handleOptionChange("Designer")}>
                    <div className="radio-button-inside">
                      <img src={Culture6}/>
                      <p>Designer</p>
                    </div>
                  </label>

                <input className="checkbox-tools" type="radio" value="Engineer" checked={selectedOption === "Engineer"} />
                  <label className="for-checkbox-tools" onClick={() => handleOptionChange("Engineer")}>
                    <div className="radio-button-inside">
                      <img src={Culture6}/>
                      <p>Engineer</p>
                    </div>
                  </label>

                <input className="checkbox-tools" type="radio" value="Other" checked={selectedOption === "Other"} />
                  <label className="for-checkbox-tools" onClick={() => handleOptionChange("Other")}>
                    <div className="radio-button-inside">
                      <img src={Culture6}/>
                      <p>Other</p>
                    </div>
                  </label>
              </form>

              <p>Paid professional experience</p>
              <form className="form-years-experience" onSubmit={handleFormSubmit}>

              <span className={`dropdown ${selectInputExpand ? 'expanded': ''}`} onClick={selectInputToogle}>

                <label>{yearsExperience}</label>

                <input type="radio" value="1 to 3 years" checked={yearsExperience === "1 to 3 years"}/>
                <label onClick={()=> {handleYearsExperienceChange("1 to 3 years")}}>1 to 3 years</label>

                <input type="radio" value="3 to 5 years" checked={yearsExperience === "3 to 5 years"}/>
                <label onClick={()=> {handleYearsExperienceChange("3 to 5 years")}}>3 to 5 years</label>

                <input type="radio" value="5 to 8 years" checked={yearsExperience === "5 to 8 years"}/>
                <label onClick={()=> {handleYearsExperienceChange("5 to 8 years")}}>5 to 8 years</label>

                <input type="radio" value="+ 8 years" checked={yearsExperience === "+ 8 years"}/>
                <label onClick={()=> {handleYearsExperienceChange("+ 8 years")}}>+ 8 years</label>
              </span>

              </form>

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
