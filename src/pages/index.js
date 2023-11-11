import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import "../styles/home.scss"

import YellowmeGifMp4 from "../images/home/yellowme-home.mp4"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      <title>Home</title>
    </Helmet>

    <div className="yellowme-home-section df-cc df-column ta-c">
      <video autoPlay playsInline loop muted>
        <source src={YellowmeGifMp4} type="video/mp4"></source>
      </video>
    </div>

  </Layout>
)

export default IndexPage
