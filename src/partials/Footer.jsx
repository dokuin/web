import React from 'react'
import { Container } from 'react-bootstrap'
import { useRouteMatch, useLocation } from 'react-router-dom'

const Footer = () => {
  const { pathname } = useLocation()
  

  return (
    pathname !== '/login' &&
    <div
      id="footer"
      className="footer py-3 m-0"
      style={{
        position: 'sticky',
        backgroundColor: '#2C4054',
        zIndex: '2',
        bottom: '0',
        width: '100%'
      }}
    >
      <Container className="d-flex justify-content-center">
        <small className="text-center text-white">
          Copyright © 2020 Dokuin.js Team
        </small>
      </Container>
    </div>
  )
}

export default Footer
