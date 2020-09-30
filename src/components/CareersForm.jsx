import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import GoogleSheets from "../utils/googleSheets";

import Illustration2 from "../images/careers/Careers-Page-Illustration-02.png";
import Illustration3 from "../images/careers/Careers-Page-Illustration-03.png";
import Illustration4 from "../images/careers/Careers-Page-Illustration-04.png";
import backButton from "../images/careers/back-button.svg"

function usePreviousValue(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const CareersForm = ({ isMenuOpen, toggleMenu }) => {

  const [formFinished, setFormFinished] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const prevValue = usePreviousValue(currentStep);

  const progressBarWidth = 200;
  const numberSteps = 16;
  const [progressStepsBarWidth, setProgressStepsBarWidth] = useState(progressBarWidth/numberSteps);
  
  const previousStep = () => {
    if(currentStep > 1) {

      if (currentStep == 13 && form[2].answer == "Designer") {
        setCurrentStep(currentStep - 2);
        setProgressStepsBarWidth(progressStepsBarWidth - ((progressBarWidth * 2)/numberSteps));
      } else {
        setCurrentStep(currentStep - 1);
        setProgressStepsBarWidth(progressStepsBarWidth - (progressBarWidth/numberSteps));
      }

      
    } else {
      toggleMenu();
    }
  }

  const nextStep = () => {
    if (currentStep == 11 && form[2].answer == "Designer") {
      setCurrentStep(currentStep + 2);
      setProgressStepsBarWidth(progressStepsBarWidth + ((progressBarWidth*2)/numberSteps));  
    } else {
      setCurrentStep(currentStep + 1);
      setProgressStepsBarWidth(progressStepsBarWidth + (progressBarWidth/numberSteps));
    }
  }

  const formQuestions = [
    {
      "stepNumber": 1,
      "question": "Take 5 minutes to answer some key questions.",
      "options": [],
      "answer": ""
    },
    {
      "stepNumber": 2,
      "question": "We protect your data.",
      "options": [],
      "answer": ""
    },
    {
      "stepNumber": 3,
      "type": "single-two-large-options",
      "question": "You identify as a:",
      "options": ["Software Engineer", "Designer"],
      "answer": ""
    },
    {
      "stepNumber": 4,
      "type": "single-six-options",
      "question": "How experienced are you?",
      "options": ["1 to 2 years", "3 to 4 years", "5 to 6 years", "7 to 8 years", "9 to 10 years", "10+ years"],
      "answer": ""
    },
    {
      "stepNumber": 5,
      "type": "single",
      "question": ["Have you ever coded something that is used by over 10,000 people?", "Have you participated in the design for a product used over 10,000 people?"],
      "options": ["Not yet", "I'll have soon", "Yes, I have"],
      "answer": ""
    },
    {
      "stepNumber": 6,
      "type": "single",
      "question": ["Have you been part of an engineering project from ideation to market acceptance?", "Have you been part of a design project from ideation to market acceptance?"],
      "options": ["Not yet", "Yes, I have"],
      "answer": ""
    },
    {
      "stepNumber": 7,
      "type": "single",
      "question": ["Have you lead the development of a product?", "Have you lead the development of an entire project or initiative?"],
      "options": ["Not yet", "Yes, I have"],
      "answer": ""
    },
    {
      "stepNumber": 8,
      "type": "single",
      "question": ["Have you contributed to an open source project?", "Have you defined the culture and process for a design team?"],
      "options": ["Not yet", "Yes, I have"],
      "answer": ""
    },
    {
      "stepNumber": 9,
      "type": "single",
      "question": ["Have you created a library, framework or programming language?", "Have you created a design pattern or visual library widely used by others?"],
      "options": ["Not yet", "Yes, I have"],
      "answer": ""
    },
    {
      "stepNumber": 10,
      "type": "multiple-options-steps",
      "question": ["In which programming language do you feel most productive?", "How strong are you as a designers in these roles?"],
      "options": [
        [
          { "name": "Javascript", "value": 0},
          { "name": "Python", "value": 0},
          { "name": "Java", "value": 0},
          { "name": "HTML5", "value": 0},
          { "name": "CSS", "value": 0},
          { "name": "PHP", "value": 0},
          { "name": "C#", "value": 0},
          { "name": "C++", "value": 0},
          { "name": "TypeScript", "value": 0},
          { "name": "SQL", "value": 0},
          { "name": "Shell", "value": 0},
          { "name": "C", "value": 0},
          { "name": "Ruby", "value": 0},
          { "name": "Swift", "value": 0},
          { "name": "Kotlin", "value": 0},
          { "name": "Scala", "value": 0}
        ], 
        [
          { "name": "Product design", "value": 0},
          { "name": "UX design", "value": 0},
          { "name": "UI design", "value": 0},
          { "name": "Motion design", "value": 0},
          { "name": "UX research", "value": 0},
          { "name": "Visual design", "value": 0},
          { "name": "Editorial design", "value": 0},
          { "name": "Brand design", "value": 0},
          { "name": "IxD", "value": 0},
        ]
      ]
    },
    {
      "stepNumber": 11,
      "type": "multiple-options-steps",
      "question": ["In which frameworks do you have more experience?", "Pick 1 to 3 mindsets or methodologies that you practice on a daily basis?"],
      "options": [
        [
          { "name": "Vue.js", "value": 0},
          { "name": "React.js", "value": 0},
          { "name": "Angular", "value": 0},
          { "name": "AngularJS", "value": 0},
          { "name": "Jquery", "value": 0},
          { "name": "Django", "value": 0},
          { "name": "Express", "value": 0},
          { "name": "ASP.NET Core", "value": 0},
          { "name": "Ruby on rails", "value": 0},
          { "name": "Flutter", "value": 0},
          { "name": "Laravel", "value": 0},
          { "name": "Flask", "value": 0},
          { "name": "Gatsby.js", "value": 0},
          { "name": "Meteorjs", "value": 0},
          { "name": "AWS", "value": 0},
        ],
        [
          { "name": "Design thinking", "value": 0},
          { "name": "User-Centered design", "value": 0},
          { "name": "Agile", "value": 0},
          { "name": "Lean startup", "value": 0},
          { "name": "Atomic design", "value": 0},
          { "name": "Design Sprints", "value": 0},
          { "name": "Service design", "value": 0},
        ]
      ]
    },
    {
      "stepNumber": 12,
      "type": "multiple-options-steps",
      "question": "Pick 3 technologies that you want to learn in the 12 months.",
      "options": [
        [
          { "name": "Data science", "value": 0},
          { "name": "Artificial intelligence", "value": 0},
          { "name": "Big data", "value": 0},
          { "name": "Internet of things", "value": 0},
          { "name": "Blockchain", "value": 0},
          { "name": "Virtual Reality", "value": 0},
          { "name": "Micro services", "value": 0}
        ], []
      ]
    },
    {
      "stepNumber": 13,
      "type": "single-two-large-options",
      "question": ["Which of these interactions do you prefer?", "What describes your growth aspirations better?"],
      "options": [
        ["Finding solutions through live collaboration.", "Spending some time alone and collaborating asyncronously."],
        ["Go as deep as possible in my current area", "Broaden my expertise including other design specialties"]
      ],
      "answer": ""
    },
    {
      "stepNumber": 14,
      "type": "inputs",
      "question": "Now, to the interesting part. Who are you?",
      "options": ["name", "city", "email", "profile"],
      "answers": ["", "", "", ""]
    },
    {
      "stepNumber": 15,
      "type": "single-two-questions",
      "title": "One last thing, we are curious about a few stuff",
      "question1": "Can we send you offers that match your profile? (Maximum one per week)",
      "question2": "If we made you an offer today, when would you be ready to start?",
      "options1": ["Sure", "Nope"],
      "options2": ["Immediately", "2 weeks", "4 weeks", "1+ month"],
      "answer1": "",
      "answer2": ""
    },
    {
      "stepNumber": 16,
      "type": "summary",
      "question": "",
      "options": [],
      "answer": ""
    }
  ]

  const [form, setForm] = useState(formQuestions);

  const setAnswer = (stepNumber, answer) => {
    const oldForm = form;

    let newForm = oldForm.map(element => {
      if(element.stepNumber == stepNumber) {
        element.answer = answer;
        return element;
      }
      return element;
    })
    setForm(newForm);
  }

  const setMultiAnswer = (questionNumber, answer) => {
    const oldForm = form;

    let newForm = oldForm.map(element => {
      if(element.stepNumber == 15) {
        if (questionNumber == 1){
          element.answer1 = answer;
        } else {
          element.answer2 = answer;
        }
        return element;
      }
      return element;
    })
    setForm(newForm);
  }

  const setAnswerSteps = (stepNumber, answer, career) => {
    const oldForm = form;
    let newForm = oldForm.map(element => {
      if(element.stepNumber == stepNumber){

        if (stepNumber == 12){
          let countOptionsSelected = element.options[0].filter(option => option.value == 100).length

          if (countOptionsSelected <= 3) {
            let option = element.options[0].find(option => option.name == answer);
            if(option.value != 100 && countOptionsSelected < 3){
              option.value = 100;
            } else {
              option.value = 0;
            }
            return element;
          } 
        } else {
          let option = element.options[career == "Software Engineer" ? 0 : 1].find(option => option.name == answer);
          if(option.value != 100){
            option.value += 25;
          } else {
            option.value = 0;
          }
          return element;
        }

      }
      return element;
    })
    setForm(newForm);
  }

  const [inputsEmpty, setInputsEmpty] = useState(false);

  const saveUserData = () => {

    let name = document.getElementById("formName").innerText;
    let city = document.getElementById("formCity").innerText;
    let email = document.getElementById("formEmail").innerText;
    let profile = document.getElementById("formProfile").innerText;

    if (name != "" && city != "" && email != "" && profile != "") {
      const oldForm = form;
      let newForm = oldForm.map(element => {
        if(element.stepNumber == 14){
          element.answers[0] = name;
          element.answers[1] = city;
          element.answers[2] = email;
          element.answers[3] = profile;
          return element;
        }
        return element;
      })
      setForm(newForm);
      nextStep();
      setInputsEmpty(false);
    } else {
      setInputsEmpty(true);
    }
  }

  const isDisabledButton = (step) => {
    switch (step.stepNumber) {
      case 10:
      case 11:
      case 12:
        if(form[2].answer == "Software Engineer"){
          let isDisabledButton = true;
          for (let index = 0; index < step.options[0].length; index++) {
            let option = step.options[0][index];
            if(option.value > 0) {
              isDisabledButton = false;
              break;
            }
          }
          return isDisabledButton;
        } else {
          let isDisabledButton = true;
          for (let index = 0; index < step.options[1].length; index++) {
            let option = step.options[1][index];
            if(option.value > 0) {
              isDisabledButton = false;
              break;
            }
          }
          return isDisabledButton;
        }
        break;

      case 15:
        return (step.answer1 == "" || step.answer2 == "") ? true : false;
        break;
    
      default:
        return step.answer == "" ? true : false;
    }
    
  }

  const sendFormGoogleSheet = () => {
    GoogleSheets.sendHiringInfo(form).then(()=>{
      setFormFinished(true)
    });
  }

  return (
    <div className={`menu-careers ${isMenuOpen ? 'menu-careers--open' : ''}`}>
      <div className="overlay-menu">

        <div className={`controls ${formFinished ? 'disabled' : ''}`}>
          
          <img src={backButton} onClick={previousStep}/>
          
          <div className={`stepper ${currentStep == numberSteps ? 'display-none' : ''}`} style={{width: `${progressBarWidth}px`}}>
            <div className="progress" style={{width: `${progressStepsBarWidth}px`}}></div>
          </div>
        </div>

        <div className="careers-form">
          <div className={`step-1 full-screen df-cc ta-c ${(currentStep == 1 ? 'show-step' : 'hidden-step')}`}>
            <div className="container"> 
              <img src={Illustration2}/>
              <div className="text-container">
                <span>Take 5 minutes to answer some key questions.</span>
                <p>This is pretty easy, we ask, you answer then you get back to your busy life.</p>
                <button onClick={nextStep}>NEXT</button>
              </div>
            </div>
          </div>

          <div className={`step-2 full-screen df-cc ta-c ${(currentStep == 2 ? 'show-step' : 'hidden-step')}`}>
            <div className="container"> 
              <img src={Illustration3}/>
              <div className="text-container">
                <span>We protect your data.</span>
                <p>We don’t share personally identifiable information with anyone. We use this information to communicate directly with you, but you can ask us to stop messaging at any time.</p>
                <button onClick={nextStep}>NEXT</button>
              </div>
            </div>
          </div>

          <div class={`step-3 full-screen df-cc ta-c df-column ${(currentStep == 3 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>You identify as a:</span>
                <p>IN CASE YOU IDENTIFY AS BOTH, PICK THE ONE THAT INTERESTS YOU THE MOST</p>
              </div>

              <div class="question-container">
                {
                  form[2].options.map(option => 
                    <div 
                      className={`card ${form[2].answer == option ? 'selected' : ''}`}
                      onClick={() => {setAnswer(3, option)}}
                    >
                      <span>{option}</span>  
                    </div>  
                )}
                <button onClick={nextStep} disabled={isDisabledButton(form[2])} className={`${isDisabledButton(form[2]) ? 'disabled' : ''}`}>NEXT</button>
              </div>

            </div>            
          </div>

          <div class={`step-4 full-screen df-cc ta-c df-column ${(currentStep == 4 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>How experienced are you?</span>
                <p>AND BY EXPERIENCED, WE MEAN ACTUAL YEARS OF PAID PROFESSIONAL EXPERIENCE.</p>
              </div>

              <div className="question-container">
                <div className="options-container">
                  {
                    form[3].options.map(option => 
                      <div 
                        className={`card ${form[3].answer == option ? 'selected' : ''}`}
                        onClick={() => {setAnswer(4, option)}}
                      >
                        <span>{option}</span>  
                      </div>  
                  )}
                </div>
                <button onClick={nextStep} disabled={isDisabledButton(form[3])} className={`${isDisabledButton(form[3]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
          </div>

          {
            [5, 6, 7, 8, 9].map((stepNumber) =>
              <div class={`step-${stepNumber} full-screen df-cc ta-c df-column ${(currentStep == stepNumber ? 'show-step' : 'hidden-step')}`}>
                <div className="container">
                  <div className="description">
                    <span>{form[stepNumber - 1].question[form[2].answer == "Software Engineer" ? 0 : 1]}</span>
                  </div>

                  <div className="question-container">
                    {form[stepNumber - 1].options.map((option) =>
                      <div
                        className={`card ${form[stepNumber - 1].answer == option ? 'selected' : ''}`}
                        onClick={() => {setAnswer(stepNumber, option)}}
                      >
                        <span>{option}</span>
                      </div>
                    )}
                    <button onClick={nextStep} disabled={isDisabledButton(form[stepNumber - 1])} className={`${isDisabledButton(form[stepNumber - 1]) ? 'disabled' : ''}`}>NEXT</button>
                  </div>
                </div>
              </div>
            )
          }
          
          <div class={`step-10-${form[2].answer == "Software Engineer" ? 'software' : 'designer'} full-screen df-cc ta-c df-column ${(currentStep == 10 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>{form[9].question[form[2].answer == "Software Engineer" ? 0 : 1]}</span>
              </div>

              <div className="question-container">
                <div className="scroll">
                {
                  form[9].options[form[2].answer == "Software Engineer" ? 0 : 1].map(option =>
                    <div
                      className={`card w${option.value}`}
                      onClick={()=> {setAnswerSteps(10, option.name, form[2].answer)}}
                    >
                      <span>{option.name}</span>
                    </div>
                )}
                </div>
                <button onClick={nextStep} disabled={isDisabledButton(form[9])} className={`${isDisabledButton(form[9]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
          </div>

          <div class={`step-11-${form[2].answer == "Software Engineer" ? 'software' : 'designer'} full-screen df-cc ta-c df-column ${(currentStep == 11 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>{form[10].question[form[2].answer == "Software Engineer" ? 0 : 1]}</span>
              </div>

              <div className="question-container">
                <div className="scroll">
                  {
                    form[10].options[form[2].answer == "Software Engineer" ? 0 : 1].map(option =>
                      <div
                        className={`card w${option.value}`}
                        onClick={()=> {setAnswerSteps(11, option.name, form[2].answer)}}
                      >
                        <span>{option.name}</span>
                      </div>
                  )}
                </div>
                <button onClick={nextStep} disabled={isDisabledButton(form[10])} className={`${isDisabledButton(form[10]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
            
          </div>

          {
          form[2].answer == "Software Engineer" ?

          <div class={`step-12 full-screen df-cc ta-c df-column ${(currentStep == 12 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>Pick 1 to 3 technologies that you want to learn in the 12 months.</span>
              </div>

              <div className="question-container">
                <div className="scroll">
                  {
                    form[11].options[0].map(option =>
                      <div
                        className={`card w${option.value}`}
                        onClick={()=> {setAnswerSteps(12, option.name, form[2].answer)}}
                      >
                        <span>{option.name}</span>
                      </div>
                  )}
                </div>
                <button onClick={nextStep} disabled={isDisabledButton(form[11])} className={`${isDisabledButton(form[11]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
          </div> : <></>
          }

          <div class={`step-13 full-screen df-cc ta-c df-column ${(currentStep == 13 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>{form[12].question[form[2].answer == "Software Engineer" ? 0 : 1]}</span>
              </div>

              <div class="question-container">
                {
                  form[12].options[form[2].answer == "Software Engineer" ? 0 : 1].map(option => 
                    <div 
                      className={`card ${form[12].answer == option ? 'selected' : ''}`}
                      onClick={() => {setAnswer(13, option, form[2].answer)}}
                    >
                      <span>{option}</span>  
                    </div>  
                )}
                <button onClick={nextStep} disabled={isDisabledButton(form[12])} className={`${isDisabledButton(form[12]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
          </div>

          <div class={`step-14 full-screen df-cc ta-c df-column ${(currentStep == 14 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>Now, to the interesting part. Who are you?</span>
              </div>

              <div class="question-container">
                <p>My name is <span id="formName" contenteditable="true"></span>,
                  I live in <span id="formCity" contenteditable="true"></span>,
                  this is my email <span id="formEmail" contenteditable="true"></span> and
                  you can learn more about me on this link <span id="formProfile" contenteditable="true"></span>
                </p>

                <button onClick={() => {saveUserData()}} disabled={isDisabledButton(form[13])} className={`${isDisabledButton(form[13]) ? 'disabled' : ''}`}>NEXT</button>
                <p className={`alert-fill ${inputsEmpty ? '': 'display-none'}`}>Please fill your information</p>
              </div>
            </div>            
          </div>

          <div class={`step-15 full-screen df-cc ta-c df-column ${(currentStep == 15 ? 'show-step' : 'hidden-step')}`}>
            <div className="container">
              <div className="description">
                <span>One last thing, we are curious about a few stuff</span>
              </div>

              <div class="question-container">
                <p>Can we send you offers that match your profile? (Maximum one per week)</p>
                <div className="options-container">
                  {
                    form[14].options1.map(option => 
                      <div 
                        className={`card ${form[14].answer1 == option ? 'selected' : ''}`}
                        onClick={() => {setMultiAnswer(1, option)}}
                      >
                        <span>{option}</span>  
                      </div>  
                  )}
                </div>

                <p>If we made you an offer today, when would you be ready to start?</p>
                <div className="options-container">
                  {
                    form[14].options2.map(option => 
                      <div 
                        className={`card ${form[14].answer2 == option ? 'selected' : ''}`}
                        onClick={() => {setMultiAnswer(2, option)}}
                      >
                        <span>{option}</span>  
                      </div>  
                  )}
                </div>
                
                <button onClick={nextStep} disabled={isDisabledButton(form[14])} className={`${isDisabledButton(form[14]) ? 'disabled' : ''}`}>NEXT</button>
              </div>
            </div>
          </div>

          <div class={`step-16 ${(currentStep == 16 ? 'show-step' : 'hidden-step-large')}`}>
            <div className="container">
              <div className="description">
                <span className="ta-c title">This is what we have so far. Is it correct?</span>

                <div className="card-summary">
                  <p>{form[13].answers[0]}</p>
                  <p>{form[2].answer}</p>
                  <p>{form[13].answers[1]}</p>
                  <p>{`${form[3].answer} of experience`}</p>
                  <p>{form[13].answers[2]}</p>
                  <p>{form[13].answers[3]}</p>
                </div>

                <span className="subtitle">{form[2].answer == "Software Engineer" ? "Your top languages are" : "Your top designer roles are"}</span>
                <div className="top-selected-container">
                  {
                    form[9].options[form[2].answer == "Software Engineer" ? 0 : 1].slice(0).sort((a, b) => b.value - a.value).map(option =>
                      option.value > 0 ? 
                      <div className={`card w${option.value}`}>
                        <p>{form[2].answer == "Software Engineer" ? "TOP LANGUAGE" : "TOP ROLE"}</p>
                        <span>{option.name}</span>  
                      </div> : null
                  )}
                </div>

                <span className="subtitle">{form[2].answer == "Software Engineer" ? "Your top frameworks are" : "Your top mindset or methodologies are"}</span>
                <div className="top-selected-container">
                  {
                    form[10].options[form[2].answer == "Software Engineer" ? 0 : 1].slice(0).sort((a, b) => b.value - a.value).map(option =>
                      option.value > 0 ?
                      <div className={`card w${option.value}`}>
                        <p>{form[2].answer == "Software Engineer" ? "TOP FRAMEWORK" : "TOP MINDSET"}</p>
                        <span>{option.name}</span>  
                      </div> : null
                  )}
                </div>

              </div>

              <div class="question-container">
                {
                  form[2].answer == "Software Engineer" ?
                  <>
                  <span className="subtitle">You would like to learn</span>
                  <div className="like-to-learn-container">
                    {
                      form[11].options[0].map(option => {
                        if(option.value > 0) {
                          return (
                            <div className={`card`}>
                              <p>TOP TECHNOLOGY</p>
                              <span>{option.name}</span>
                            </div>
                          )
                        }
                      }
                    )}
                  </div> </> : <></>
                }

                <span className="subtitle">You feel more productive</span>

                <span className="feel-productive">{form[12].answer}</span>

                <button onClick={sendFormGoogleSheet}>YES, THAT’S ME</button>
                <button onClick={previousStep} className="button outline">EDIT INFO</button>

              </div>
            </div>

            <div id="myModal" class={`modal ${formFinished ? 'show' : ''}`}>
              <div class="modal-content">
                
                <div className="container"> 
                  <img src={Illustration4}/>
                  <div className="text-container">
                    <span>Thank you!</span>
                    <p>Now get back to work or whatever fun thing you were doing.</p>
                    <Link to="/"><button to="/culture">TAKE ME HOME</button></Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
      
        </div>
      </div>
    </div>
  )
}

CareersForm.propTypes = {
  isMenuOpen: PropTypes.bool,
}

export default CareersForm


/* 

<h2>current {currentStep}</h2>
      <h2>prev {prevValue}</h2>

      <div className={`step-0 ${(currentStep == 0 ? 'show-step' : 'hidden-step-left')}` }>
        <h1>hola step 0</h1>
        <button onClick={nextStep}>Go to next step</button>
      </div>
      <div className={`step-1 ${(currentStep == 1 ? 'show-step' : (prevValue == 0 ? 'hidden-step-right' : 'hidden-step-left'))}` }>
        <h1>hola step 1</h1>
        <button onClick={previousStep}>Return to previous step</button>
        <button onClick={nextStep}>Go to next step</button>
      </div>
      <div className={`step-1 ${(currentStep == 2 ? 'show-step' : (prevValue == 1 ? 'hidden-step-right' : 'hidden-step-left'))}` }>
        <h1>hola step 2</h1>
        <button onClick={previousStep}>Return to previous step</button>
      </div>

*/