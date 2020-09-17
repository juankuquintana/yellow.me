import React, { useState } from "react"

import DaniWebpDesktop from "../images/yellows/webp/Dani-Yellowme-Team-Desktop.webp";
import DaniJpgDesktop from "../images/yellows/jpg/Dani-Yellowme-Team-Desktop.jpg";
import DaniWebpMobile from "../images/yellows/webp/Dani-Yellowme-Team-Mobile.webp";
import DaniJpgMobile from "../images/yellows/jpg/Dani-Yellowme-Team-Mobile.jpg";

import GerryWebpDesktop from "../images/yellows/webp/Gerry-Yellowme-Team-Desktop.webp";
import GerryJpgDesktop from "../images/yellows/jpg/Gerry-Yellowme-Team-Desktop.jpg";
import GerryWebpMobile from "../images/yellows/webp/Gerry-Yellowme-Team-Mobile.webp";
import GerryJpgMobile from "../images/yellows/jpg/Gerry-Yellowme-Team-Mobile.jpg";

import JimenaWebpDesktop from "../images/yellows/webp/Jimena-Yellowme-Team-Desktop.webp";
import JimenaJpgDesktop from "../images/yellows/jpg/Jimena-Yellowme-Team-Desktop.jpg";
import JimenaWebpMobile from "../images/yellows/webp/Jimena-Yellowme-Team-Mobile.webp";
import JimenaJpgMobile from "../images/yellows/jpg/Jimena-Yellowme-Team-Mobile.jpg";

import LuisWebpDesktop from "../images/yellows/webp/Luis-Yellowme-Team-Desktop.webp";
import LuisJpgDesktop from "../images/yellows/jpg/Luis-Yellowme-Team-Desktop.jpg";
import LuisWebpMobile from "../images/yellows/webp/Luis-Yellowme-Team-Mobile.webp";
import LuisJpgMobile from "../images/yellows/jpg/Luis-Yellowme-Team-Mobile.jpg";

import PintorWebpDesktop from "../images/yellows/webp/Pintor-Yellowme-Team-Desktop.webp";
import PintorJpgDesktop from "../images/yellows/jpg/Pintor-Yellowme-Team-Desktop.jpg";
import PintorWebpMobile from "../images/yellows/webp/Pintor-Yellowme-Team-Mobile.webp";
import PintorJpgMobile from "../images/yellows/jpg/Pintor-Yellowme-Team-Mobile.jpg";

import EdWebpDesktop from "../images/yellows/webp/Ed-Yellowme-Team-Desktop.webp";
import EdJpgDesktop from "../images/yellows/jpg/Ed-Yellowme-Team-Desktop.jpg";
import EdWebpMobile from "../images/yellows/webp/Ed-Yellowme-Team-Mobile.webp";
import EdJpgMobile from "../images/yellows/jpg/Gerry-Yellowme-Team-Mobile.jpg";

import HuriWebpDesktop from "../images/yellows/webp/Huri-Yellowme-Team-Desktop.webp";
import HuriJpgDesktop from "../images/yellows/jpg/Huri-Yellowme-Team-Desktop.jpg";
import HuriWebpMobile from "../images/yellows/webp/Huri-Yellowme-Team-Mobile.webp";
import HuriJpgMobile from "../images/yellows/jpg/Huri-Yellowme-Team-Mobile.jpg";

import VictorWebpDesktop from "../images/yellows/webp/Victor-Yellowme-Team-Desktop.webp";
import VictorJpgDesktop from "../images/yellows/jpg/Victor-Yellowme-Team-Desktop.jpg";
import VictorWebpMobile from "../images/yellows/webp/Victor-Yellowme-Team-Mobile.webp";
import VictorJpgMobile from "../images/yellows/jpg/Victor-Yellowme-Team-Mobile.jpg";

import JeromeWebpDesktop from "../images/yellows/webp/Jerome-Yellowme-Team-Desktop.webp";
import JeromeJpgDesktop from "../images/yellows/jpg/Jerome-Yellowme-Team-Desktop.jpg";
import JeromeWebpMobile from "../images/yellows/webp/Jerome-Yellowme-Team-Mobile.webp";
import JeromeJpgMobile from "../images/yellows/jpg/Jerome-Yellowme-Team-Mobile.jpg";

import ButtonNewMember from "../images/button-new-member.svg"

const yellowsPeople = [
  {
    photoWebpDesktop: DaniWebpDesktop,
    photoJpgDesktop: DaniJpgDesktop,
    photoWebpMobile: DaniWebpMobile,
    photoJpgMobile: DaniJpgMobile,
    firstname: "Dani",
    lastname: "Jaime",
    role: "Finance Lead",
    exp: 4,
    currently: "Managing and financially taking care of the company",
    scoop: "Born to eat chocolate 🍫"
  },
  {
    photoWebpDesktop: GerryWebpDesktop,
    photoJpgDesktop: GerryJpgDesktop,
    photoWebpMobile: GerryWebpMobile,
    photoJpgMobile: GerryJpgMobile,
    firstname: "Gerry",
    lastname: "",
    role: "Software engineer",
    exp: 2,
    currently: "Working on the front-end and back-end of SV Academy",
    scoop: "Plays soccer since 4 years old ⚽️"
  },
  {
    photoWebpDesktop: JimenaWebpDesktop,
    photoJpgDesktop: JimenaJpgDesktop,
    photoWebpMobile: JimenaWebpMobile,
    photoJpgMobile: JimenaJpgMobile,
    firstname: "Jimena",
    lastname: "Hernández",
    role: "Head of people",
    exp: 6,
    currently: "Creating internal processes to connect the company",
    scoop: "Loves to dance salsa  💃"
  },
  {
    photoWebpDesktop: LuisWebpDesktop,
    photoJpgDesktop: LuisJpgDesktop,
    photoWebpMobile: LuisWebpMobile,
    photoJpgMobile: LuisJpgMobile,
    firstname: "Luis",
    lastname: "Burgos",
    role: "Mobile developer",
    exp: 4,
    currently: "Developing the mobile app of Tilliden",
    scoop: "Can airdrum any rhythm 🥁"
  },
  {
    photoWebpDesktop: PintorWebpDesktop,
    photoJpgDesktop: PintorJpgDesktop,
    photoWebpMobile: PintorWebpMobile,
    photoJpgMobile: PintorJpgMobile,
    firstname: "Jorge",
    lastname: "Pintor",
    role: "Software Enginner",
    exp: 7,
    currently: "Working on the banking back-end of Enso",
    scoop: "Loves telling jokes 🤡"
  },
  {
    photoWebpDesktop: EdWebpDesktop,
    photoJpgDesktop: EdJpgDesktop,
    photoWebpMobile: EdWebpMobile,
    photoJpgMobile: EdJpgMobile,
    firstname: "Ed",
    lastname: "Vázquez",
    role: "Product Designer",
    exp: 5,
    currently: "Designing the interface and experience of Billeto",
    scoop: "Aspiring professional gamer 🎮"
  },
  {
    photoWebpDesktop: HuriWebpDesktop,
    photoJpgDesktop: HuriJpgDesktop,
    photoWebpMobile: HuriWebpMobile,
    photoJpgMobile: HuriJpgMobile,
    firstname: "Huri",
    lastname: "",
    role: "Designer",
    exp: 20,
    currently: "Designing the user experience of Synapse",
    scoop: "Is always creating something 💡"
  },
  {
    photoWebpDesktop: VictorWebpDesktop,
    photoJpgDesktop: VictorJpgDesktop,
    photoWebpMobile: VictorWebpMobile,
    photoJpgMobile: VictorJpgMobile,
    firstname: "Victor",
    lastname: "",
    role: "Software engineer",
    exp: 4,
    currently: "Engineering the front-end of Plexie",
    scoop: "Enjoys dancing salsa 🕺"
  },
  {
    photoWebpDesktop: JeromeWebpDesktop,
    photoJpgDesktop: JeromeJpgDesktop,
    photoWebpMobile: JeromeWebpMobile,
    photoJpgMobile: JeromeJpgMobile,
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
    <div className="meet-yellows-section">
      <h2>Meet the Yellows</h2>
      <div className="meet-yellows">

        <div className="yellow-photo">
          <picture>
            <source srcSet={currentYellowPerson.photoWebpDesktop} media="(min-width: 992px)" type="image/webp" />
            <source srcSet={currentYellowPerson.photoJpgDesktop} media="(min-width: 992px)" type="image/jpeg" />
            <source srcSet={currentYellowPerson.photoWebpMobile} type="image/webp" />
            <source srcSet={currentYellowPerson.photoJpgMobile} type="image/jpeg" />

            <img src={currentYellowPerson.photoJpgDesktop}/>
          </picture>
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

          <div className="other-yellows">
            <span>{`Yellowme is ${currentYellowPerson.firstname} and 60 other amazing designers, engineers and product managers.`}</span>
            <img src={ButtonNewMember} onClick={changeYellow}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Yellows
