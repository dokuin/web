import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Image, Col, Row } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import landing from '../../assets/landing.jpg'
import DokuinLandingPng from '../../assets/dokuin landing.png'

const Banner = () => {
  useEffect(() => {
    document.getElementById('root').style.backgroundColor = '#ffffff'

    return () => {
      document.getElementById('root').style.backgroundColor = '#d5dbf6'
    }
  }, [])

  return (
    <Row
      className="section"
      style={{
        borderRadius: 0,
        position: 'static',
        height: '90vh',
        top: '0',
        bottom: '0',
        width: '100%'
      }}
    >
      <Col
        sm={12}
        md={6}
        className="d-flex justify-content-end align-items-center"
      >
        <Fade left>
          <div className="d-flex flex-column align-items-center">
            <Image
              src={DokuinLandingPng}
              fluid
              style={{
                width: '25vh',
                height: '25vh'
              }}
            />
            <h1 className="font-weight-bold my-3" style={{ fontSize: '5em' }}>
              Dokuin.js
            </h1>
            <h3
              className="font-weight-bold"
              style={{
                fontSize: '2em',
                marginTop: '-15px',
                marginBottom: '20px'
              }}
            >
              Online API documentation maker
            </h3>
            <Link
              title="Create new project"
              to="/new-project"
              className="banner-btn btn-1 font-weight-bold"
              style={{ fontSize: '1.5em' }}
            >
              Start Now
            </Link>
          </div>
        </Fade>
      </Col>
      <Col
        sm={12}
        md={6}
        className="d-flex  justity-content-center align-items-center"
      >
        <Fade right>
          <Image src={landing} fluid />
        </Fade>
      </Col>
    </Row>
  )
}

export default Banner
