import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import logo from '../assets/dokuin-logo.png'
import styled from 'styled-components'

const HoverText = styled.p`
  color: white;
  :hover {
    color: grey;
    cursor: pointer;
  }
`

const Footer = () => {
  const { pathname } = useLocation()

  return (
    pathname !== '/login' &&
    <div
      className="footer py-5 m-0"
      style={{
        position: 'relative',
        backgroundColor: '#2C4054',
        zIndex: '2',
        bottom: '0',
        width: '100%'
      }}
    >
      <Container className="d-flex justify-content-around">
        <div className="d-flex flex-column">
          <h5 style={{ color: 'gray' }} className="mb-4">
            Channel
          </h5>
          <a
            style={{ textDecoration: 'none' }}
            // eslint-disable-next-line
            target="_blank"
            href="https://github.com/orgs/dokuin"
          >
            <HoverText>Github</HoverText>
          </a>
        </div>
        <div className="d-flex flex-column">
          <img src={logo} height={60} alt="" />
          <small className="text-center text-white">
            Copyright © 2020 Dokuin.js Team
          </small>
        </div>
      </Container>
    </div>
  )
}

export default Footer
