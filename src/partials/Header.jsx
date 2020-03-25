import React from 'react'
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'
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
      style={{ backgroundColor: 'tranparent' }}
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
          <Nav style={{
            borderBottom:'2px solid grey',
            paddingBottom: '6px',
            paddingRight:'30px',
            paddingLeft:'60px',}}>
            <Link to="/" className="router-link">

              <Nav.Link as="div" className="text-dark font-weight-bold">
                Editor

              </Nav.Link>
            </Link>

            <Link to="/" className="router-link">
              <Nav.Link as="div" className="text-dark font-weight-bold">
                Dokuin CLI
              </Nav.Link>
            </Link>
            {
              localStorage.getItem('token') ?
              <>
              <Link to="/profile" className="router-link">
              <Nav.Link as="div" className="text-dark font-weight-bold">
                Profile
              </Nav.Link>
            </Link>
            <Button style={{ marginLeft:'20px'}} variant="outline-secondary" size="sm">Logout</Button>{' '}
              </>
              :
              <Link to="/login" className="router-link">
              <Nav.Link as="div" className="text-dark font-weight-bold">
                Login
              </Nav.Link>
            </Link>
            }

          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
