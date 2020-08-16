import React from "react"

import "../styles/_valuesList.scss"

import circle from "../images/circle.png";
import triangle from "../images/triangle.png";

import CultureIcon1 from "../images/culture/culture-icon-1.png"
import CultureIcon2 from "../images/culture/culture-icon-2.png"
import CultureIcon3 from "../images/culture/culture-icon-3.png"
import CultureIcon4 from "../images/culture/culture-icon-4.png"
import CultureIcon5 from "../images/culture/culture-icon-5.png"
import CultureIcon6 from "../images/culture/culture-icon-6.png"

const valuesList = [
  {
    title: "Strive for ownership",
    description: "This is not only a job. Cultivate an owner mentality towards our work.",
    icon: {
      name: CultureIcon1,
      height: 70,
      width: 158
    }
  },
  {
    title: "Questions above answers",
    description: "Having an answer is OK. Knowing that you don’t have the answer and coming up with a question is 10X better.",
    icon: {
      name: CultureIcon2,
      height: 70,
      width: 158
    }
  },
  {
    title: "Always be learning",
    description: "Listen to others, experiment, read books and open dialogue. Do whatever you need to do, but never stop exploring.",
    icon: {
      name: CultureIcon3,
      height: 70,
      width: 158
    }
  },
  {
    title: "No one is left behind",
    description: "Be there for others and remember that others are there for you.",
    icon: {
      name: CultureIcon4,
      height: 70,
      width: 158
    }
  },
  {
    title: "Give back to the community",
    description: "Remember that you’re standing on the shoulders of giants. Share what you learn along the journey for others to stand on your discoveries.",
    icon: {
      name: CultureIcon5,
      height: 70,
      width: 158
    }
  },
  {
    title: "Recognize the struggle",
    description: "Be compassionate and don’t forget that technology is built by humans and for humans, and every human is fighting a fight.",
    icon: {
      name: CultureIcon6,
      height: 70,
      width: 158
    }
  },
]

const ValuesList = () => {
  return (
    <>
      {valuesList.map(value => {
        return (
          <div className="values-list-section bg-light-grey full-screen df-cc df-column ta-c content-ctr">
          <div>
            <img src={value.icon.name} height={value.icon.height} width={value.icon.width} />
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
