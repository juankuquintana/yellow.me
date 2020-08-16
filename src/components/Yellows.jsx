import React, { useState } from "react"

import DaniPhoto from "../images/yellows/Dani.jpg";
import GerryPhoto from "../images/yellows/Gerry.jpg";
import JimenaPhoto from "../images/yellows/Jimena.jpg";
import LuisPhoto from "../images/yellows/Luis.jpg";
import PintorPhoto from "../images/yellows/Pintor.jpg";
import EdPhoto from "../images/yellows/Ed.jpg";
import HuriPhoto from "../images/yellows/Huri.jpg";
import VictorPhoto from "../images/yellows/Victor.jpg";
import JeromePhoto from "../images/yellows/Jerome.jpg";

import ButtonNewMember from "../images/button-new-member.svg"

const yellowsPeople = [
  {
    photo: DaniPhoto,
    firstname: "Dani",
    lastname: "Jaime",
    role: "Finance Lead",
    exp: 4,
    currently: "Managing and financially taking care of the company",
    scoop: "Born to eat chocolate 🍫"
  },
  {
    photo: GerryPhoto,
    firstname: "Gerry",
    lastname: "",
    role: "Software engineer",
    exp: 2,
    currently: "Working on the front-end and back-end of SV Academy",
    scoop: "Plays soccer since 4 years old ⚽️"
  },
  {
    photo: JimenaPhoto,
    firstname: "Jimena",
    lastname: "Hernández",
    role: "Head of people",
    exp: 6,
    currently: "Creating internal processes to connect the company",
    scoop: "Loves to dance salsa  💃"
  },
  {
    photo: LuisPhoto,
    firstname: "Luis",
    lastname: "Burgos",
    role: "Mobile developer",
    exp: 4,
    currently: "Developing the mobile app of Tilliden",
    scoop: "Can airdrum any rhythm 🥁"
  },
  {
    photo: PintorPhoto,
    firstname: "Jorge",
    lastname: "Pintor",
    role: "Software Enginner",
    exp: 7,
    currently: "Working on the banking back-end of Enso",
    scoop: "Loves telling jokes 🤡"
  },
  {
    photo: EdPhoto,
    firstname: "Ed",
    lastname: "Vázquez",
    role: "Product Designer",
    exp: 5,
    currently: "Designing the interface and experience of Billeto",
    scoop: "Aspiring professional gamer 🎮"
  },
  {
    photo: HuriPhoto,
    firstname: "Huri",
    lastname: "",
    role: "Designer",
    exp: 20,
    currently: "Designing the user experience of Synapse",
    scoop: "Is always creating something 💡"
  },
  {
    photo: VictorPhoto,
    firstname: "Victor",
    lastname: "",
    role: "Software engineer",
    exp: 4,
    currently: "Engineering the front-end of Plexie",
    scoop: "Enjoys dancing salsa 🕺"
  },
  {
    photo: JeromePhoto,
    firstname: "Jerome",
    lastname: "",
    role: "Software engineer",
    exp: 7,
    currently: "Working on the front-end and back-end of Billeto",
    scoop: "Can drink coffee all day long ☕️"
  },
]

const Yellows = () => {

  const [currentYellowPerson, setCurrentYellowPerson] = useState(yellowsPeople[0]);
  const [currentYellowPersonIndex, setCurrentYellowPersonIndex] = useState(0);

  const changeYellow = () => {
    let currentIndex = currentYellowPersonIndex;
    currentIndex++;

    if (currentIndex == yellowsPeople.length) 
      currentIndex = 0;

    setCurrentYellowPerson(yellowsPeople[currentIndex]);
    setCurrentYellowPersonIndex(currentIndex);
  }

  return (
    <div className="meet-yellows">

      <div className="yellow-photo">
        <img src={currentYellowPerson.photo}/>
      </div>

      <div className="yellow-bio">
        <div className="yellow-data">
          <p className="yellow-name">{ `${currentYellowPerson.firstname}` }</p>

          <div class="display-flex">
            <div class="yellow-role">
              <p className="caption">ROLE</p>
              <p className="value">{`${currentYellowPerson.role}`}</p>
            </div>

            <div class="yellow-exp">
              <p className="caption">EXP</p>
              <p className="value">{`${currentYellowPerson.exp} Years`}</p>
            </div>
          </div>

          <div class="yellow-currently">
            <p className="caption">CURRENTLY</p>
            <p className="value">{`${currentYellowPerson.currently}`}</p>
          </div>

          <div class="yellow-scoop">
            <p className="caption">SCOOP</p>
            <p className="value">{`${currentYellowPerson.scoop}`}</p>
          </div>
        </div>

        <div className="divider" />

        <div className="footer">
          <span>{`Yellowme is ${currentYellowPerson.firstname} and 60 other amazing designers, engineers and product managers.`}</span>
          <img src={ButtonNewMember} onClick={changeYellow}/>
        </div>
      </div>
    </div>
  )
}

export default Yellows
