import React from "react"
import SynapseLogo from "../images/SynapseLogo.svg"

const clientsList = [
  {
    logo: SynapseLogo,
    text: "Supporting organization-level training and upskilling",
  },
  {
    logo: SynapseLogo,
    text: "Expanding access to the jobs of the future",
  },
  {
    logo: SynapseLogo,
    text: "Accompanying people on their path to financial freedom",
  },
  {
    logo: SynapseLogo,
    text: "Solving access to microlending through data and technology",
  },
  {
    logo: SynapseLogo,
    text: "Accelerating the cashless economy",
  },
  {
    logo: SynapseLogo,
    text: "Keeping people safe through street-level intelligence",
  },
  {
    logo: SynapseLogo,
    text: "Empowering kids through decision-making and financial literacy",
  },
  {
    logo: SynapseLogo,
    text: "Solving business challenges with design and technology ",
  },
]

const ClientsList = () => {
  return (
    <div>
      <div className="clients-section content-ctr">
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
    </div>
  )
}

export default ClientsList
