import React from "react"

import "../styles/_valuesList.scss"

import circle from "../images/circle.png";
import triangle from "../images/triangle.png";

const valuesList = [
  {
    title: "Strive for ownership",
    description: "This is not only a job. Cultivate an owner mentality towards our work.",
  },
  {
    title: "Questions above answers",
    description: "Having an answer is OK. Knowing that you don’t have the answer and coming up with a question is 10X better.",
  },
  {
    title: "Always be learning",
    description: "Listen to others, experiment, read books and open dialogue. Do whatever you need to do, but never stop exploring.",
  },
  {
    title: "No one is left behind",
    description: "Be there for others and remember that others are there for you.",
  },
  {
    title: "Give back to the community",
    description: "Remember that you’re standing on the shoulders of giants. Share what you learn along the journey for others to stand on your discoveries.",
  },
  {
    title: "Recognize the struggle",
    description: "Be compassionate and don’t forget that technology is built by humans and for humans, and every human is fighting a fight.",
  },
]

const ValuesList = () => {
  return (
    <>
      {valuesList.map(value => {
        return (
          <div className="values-list-section bg-light-grey full-screen df-cc df-column ta-c content-ctr">
          <div>
            <img src={circle} height={47} width={46} style={{marginRight: 8}}/>
            <img src={triangle} height={47} width={46}/>
          </div>
          <h2>{value.title}</h2>
          <p>
            {value.description}
          </p>
          </div>
        )
      })}
    </>
  )
}

export default ValuesList
