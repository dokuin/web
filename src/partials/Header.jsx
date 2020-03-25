import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import DokuinLogo from '../assets/dokuin-logo.png'

import styled from 'styled-components'

const HoverText = styled.p`
  color: white;
  :hover {
    border-bottom: 2px solid #59adb5cc;

    cursor: pointer;
  }
`

const Header = () => {
    const { pathname } = useLocation()
 
  return (
    pathname !== '/login'  &&
    <Navbar
      id="navigation"
      collapseOnSelect
      expand="lg"
      className="m-0 d-flex justify-content-center"
      style={{ backgroundColor: '#232d3d' }}
      sticky="top"
    >
      <Container className="m-0 d-flex justify-content-between">
        <div>
          <Link to="/" className="router-link">
            <Navbar.Brand as="div" href="#">
              <Image src={DokuinLogo} height={50} />
            </Navbar.Brand>
          </Link>
        </div>

        <div>
          <Nav className="">
            <Link to="/" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                <HoverText className="my-auto">Editor</HoverText>
              </Nav.Link>
            </Link>

            <Link to="/" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                <HoverText className="my-auto">Dokuin CLI</HoverText>
              </Nav.Link>
            </Link>

            <Link to="/login" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                <HoverText className="my-auto">
                  {localStorage.getItem('token') ? 'Profile' : 'Login'}
                </HoverText>
              </Nav.Link>
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
