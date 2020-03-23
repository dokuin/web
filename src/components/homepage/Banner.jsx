import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { Fade } from 'react-reveal'

import DokuinLandingPng from '../../assets/dokuin landing.png'

const Banner = () => {
  return (
    <div
      className="section d-flex align-items-center justify-content-center text-center banner"
      style={{
        borderRadius: 0,
        height: '90vh',
        position: 'sticky',
        width: '100%'
      }}
    >
      <Fade top>
        <div className="d-flex flex-column align-items-center">
          <Image
            src={DokuinLandingPng}
            fluid
            style={{
              width: '30vh',
              height: '30vh'
            }}
          />
          <h1 className="font-weight-bold" style={{ fontSize: '5em' }}>
            Dokuin.js
          </h1>
          <h3 className="font-weight-bold my-3" style={{ fontSize: '2em' }}>
            Online API documentation maker
          </h3>
          <Link
            to="/new-project"
            className="banner-btn btn-1 mr-2 font-weight-bold"
            style={{ fontSize: '1.5em' }}
          >
            Start Now
          </Link>
        </div>
      </Fade>
    </div>
  )
}

export default Banner
