import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap'
import { Link, useLocation, useHistory } from 'react-router-dom'
import DokuinLogo from '../assets/dokuin-logo.png'

import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setLogoutState } from '../store/actions/user'

// eslint-disable-next-line
const HoverText = styled.p`
  color: white;
  :hover {
    border-bottom: 2px solid #59adb5cc;

    cursor: pointer;
  }
`

const Header = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { pathname } = useLocation()
  const isLogin = useSelector((state) => state.useReducer)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    if (isLogin) {
      setLogin(isLogin)
    }
  }, [isLogin])

  const logout = () => {
    dispatch(setLogoutState())
    localStorage.removeItem('token')
  }

  return (
    pathname !== '/login' && (
      <Navbar
        id="navigation"
        collapseOnSelect
        expand="lg"
        className="m-0 d-flex justify-content-center"
        style={{ background: '#d5dbf6' }}
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
            <Nav
              style={{
                borderBottom: '2px solid grey',
                paddingBottom: '6px',
                paddingRight: '30px',
                paddingLeft: '60px'
              }}
            >
              {login || localStorage.getItem('token') ? (
                <Link to="/projects" className="router-link">
                  <Nav.Link as="div" className="text-dark font-weight-bold">
                    Projects
                  </Nav.Link>
                </Link>
              ) : (
                ''
              )}

              <Link to="/" className="router-link">
                <Nav.Link as="div" className="text-dark font-weight-bold">
                  Dokuin CLI
                </Nav.Link>
              </Link>
              {login || localStorage.getItem('token') ? (
                <>
                  <Link to="/profile" className="router-link">
                    <Nav.Link as="div" className="text-dark font-weight-bold">
                      Profile
                    </Nav.Link>
                  </Link>
                  <Button
                    style={{ marginLeft: '20px' }}
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => logout()}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login" className="router-link">
                  <Nav.Link as="div" className="text-dark font-weight-bold">
                    Login
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    )
  )
}

export default Header
