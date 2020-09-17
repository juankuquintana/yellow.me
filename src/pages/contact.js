import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import GoogleSheets from "../utils/googleSheets";

import Layout from "../components/layout"
import "../styles/contact.scss"

import Footer from "../components/Footer"

import SendIcon from "../images/button-send.svg"
//Culture icons
import ContactIcon1 from "../images/contact/contact-icon-1.png"
import ContactIcon2 from "../images/contact/contact-icon-2.png"
import DesignerIcon from "../images/contact/Designer.png"
import EngineerIcon from "../images/contact/Engineer.png"
import OtherIcon from "../images/contact/Other.png"
import ConfirmationIcon from "../images/contact/Confirmation.png"

const ContactPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("Designer");
  const [selectInputExpand, setSelectInputExpand] = useState(false)
  const [yearsExperience, setYearsExperience] = useState("Select your experience");
  const [emailSent, setEmailSent] = useState(false);

  const typeName = (event) => {
    setName(event.target.value);
  };

  const typeEmail = (event) => {
    setEmail(event.target.value);
  };

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


  const sendTalentInfo = () => {
    GoogleSheets.sendTalentInfo(name, email, selectedOption, (yearsExperience == "+ 8 years" ? "'+ 8 years": yearsExperience)).then(()=>{
      setEmailSent(true);
    })
  }
  

  return(
    <Layout>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <title>Contact</title>
      </Helmet>

      <div className={`${emailSent ? 'hidden' : ''}`}>
        <div className="client-card">
          <h2>Tell us, we are all ears</h2>
          <div className="container">
            <div className="subscribe">
              <div>
                <img src={ContactIcon1}/>
              </div>

              <span>Do you need support building or extending a product team?</span>
              <p>Schedule a discovery call</p>

              <div className="program-a-call">
                <span className="uppercase">Program a call</span>
                <a href="https://calendly.com/cesarsalazar "><img src={SendIcon} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="talent-card">
          <div className="container">
            <div className="subscribe">
              <div>
                <img src={ContactIcon2}/>
              </div>

              <span>Are you open to join us and work on exciting Silicon Valley level companies?</span>

              <div className="contact-form">
              
                <p>Tell us your name</p>
                <input type="text" name="name" onChange={typeName}/>

                <p>What’s your email?</p>
                <input type="email" name="email" onChange={typeEmail}/>

                <p>And you are?</p>
                <form className="form-job-searched" onSubmit={handleFormSubmit}>
                  <input className="checkbox-tools" type="radio" value="Designer" checked={selectedOption === "Designer"} />
                    <label className="for-checkbox-tools" onClick={() => handleOptionChange("Designer")}>
                      <div className="radio-button-inside">
                        <img src={DesignerIcon}/>
                        <p>Designer</p>
                      </div>
                    </label>

                  <input className="checkbox-tools" type="radio" value="Engineer" checked={selectedOption === "Engineer"} />
                    <label className="for-checkbox-tools" onClick={() => handleOptionChange("Engineer")}>
                      <div className="radio-button-inside">
                        <img src={EngineerIcon}/>
                        <p>Engineer</p>
                      </div>
                    </label>

                  <input className="checkbox-tools" type="radio" value="Other" checked={selectedOption === "Other"} />
                    <label className="for-checkbox-tools" onClick={() => handleOptionChange("Other")}>
                      <div className="radio-button-inside">
                        <img src={OtherIcon}/>
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
                <img src={SendIcon} onClick={sendTalentInfo}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-contact">
          <Footer />
        </div>
        
      </div>
      

      <div className={`confirmation-email df-cc df-column ${emailSent ? '' : 'hidden'}`}>
        <h2 className="">Thank you!</h2>
        <img src={ConfirmationIcon}></img>
        <p>Great! Now you're part of our talent pool.</p>
      </div>

    </Layout>  
  )
  
}

export default ContactPage
