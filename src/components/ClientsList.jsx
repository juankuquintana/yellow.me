import React from "react"
import SynapseLogo from "../images/synapse-logo.png"
import SVAcademyLogo from "../images/sv-academy-logo.png"
import EnsoLogo from "../images/enso-logo.png"
import KueskiLogo from "../images/kueski-logo.png"
import Billeto from "../images/billeto-logo.png"
import BaseOperationsLogo from "../images/base-logo.png"
import TillidenLogo from "../images/tilliden-logo.png"
import WizelineLogo from "../images/wizeline-logo.png"

const clientsList = [
  {
    logo: SynapseLogo,
    text: "Supporting organization-level training and upskilling",
  },
  {
    logo: SVAcademyLogo,
    text: "Expanding access to the jobs of the future",
  },
  {
    logo: EnsoLogo,
    text: "Accompanying people on their path to financial freedom",
  },
  {
    logo: KueskiLogo,
    text: "Solving access to microlending through data and technology",
  },
  {
    logo: Billeto,
    text: "Accelerating the cashless economy",
  },
  {
    logo: BaseOperationsLogo,
    text: "Keeping people safe through street-level intelligence",
  },
  {
    logo: TillidenLogo,
    text: "Empowering kids through decision-making and financial literacy",
  },
  {
    logo: WizelineLogo,
    text: "Solving business challenges with design and technology ",
  },
]

const ClientsList = () => {
  return (
    <div className="clients-section">
      <h2>Currently working alongside these promising companies</h2>
      <div className="clients-list">
        {clientsList.map(client => {
          return (
            <div className="clients-list--client">
              <img src={client.logo} alt="client-logo" />
              <p>{client.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ClientsList
