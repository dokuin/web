import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DokuinLogo from '../assets/logo dokuin.png'

const Header = () => {
  return (
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
                Editor
              </Nav.Link>
            </Link>

            <Link to="/" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                Dokuin CLI
              </Nav.Link>
            </Link>

            <Link to="/" className="router-link">
              <Nav.Link as="div" className="text-white font-weight-bold">
                {localStorage.getItem('token') ? 'Profile' : 'Login'}
              </Nav.Link>
            </Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header
