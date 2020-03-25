import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import { useDispatch } from 'react-redux'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Image } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { Fade } from 'react-reveal'
import { IoMdArrowBack } from 'react-icons/io'

import LoginBg from '../assets/LoginBg.png'
import { SIGN_IN, SIGN_UP } from '../schemas/user'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
}))

const TextFld = withStyles((theme) => ({
  root: {
    marginBottom: '20px'
  }
}))(TextField)

const ColorButton = withStyles((theme) => ({
  root: {
    marginTop: '20px',
    width: '100%',
    backgroundColor: red[400],
    '&:hover': {
      backgroundColor: red[700]
    }
  }
}))(Button)

export default function() {
  const classes = useStyles()
  const dispatch = useDispatch
  const [onRegister, setOnRegister] = useState(false)
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signIn] = useMutation(SIGN_IN)
  const [signUp] = useMutation(SIGN_UP)

  const showRegister = () => {
    setFullname('')
    setUsername('')
    setProfilePic('')
    setEmail('')
    setPassword('')
    setOnRegister(!onRegister)
  }

  const login = async () => {
    try {
      const response = await signIn({
        variables: {
          email: email,
          password: password
        }
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  const register = async () => {
    try {
      const response = await signUp({
        variables: {
          fullName: fullname,
          username: username,
          profilePicURL: profilePic,
          email: email,
          password: password
        }
      })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        top: '0',
        left: '0',
        right: '0',
        backgroundColor: 'white'
      }}
    >
      <Fade right>
        <div
          style={{
            position: 'fixed',
            right: '0'
          }}
        >
          <Image src={LoginBg} />
        </div>
      </Fade>
      <Fade left>
        <div
          style={{
            height: '50vh',
            width: '30vw',
            position: 'absolute',
            marginTop: '15vh',
            marginLeft: '20vh',
            borderRadius: '60px'
          }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <Link to="/">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                marginTop: '-10vh'
              }}
            >
              <IoMdArrowBack className="mr-2" />
              BACK
            </Button>
          </Link>
          <h1
            style={{
              width: '100%',
              borderBottom: '2px solid red',
              marginTop: onRegister ? '2em' : 'initial'
            }}
          >
            {onRegister ? 'REGISTER' : 'LOGIN'}
          </h1>
          <div
            className={classes.root}
            style={{
              padding: '30px'
            }}
          >
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault()
                onRegister ? register() : login()
              }}
            >
              {onRegister && (
                <>
                  <TextFld
                    id="standard-secondary"
                    fullWidth
                    label="Full Name"
                    color="secondary"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />

                  <TextFld
                    id="standard-secondary"
                    fullWidth
                    label="Username"
                    color="secondary"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <TextFld
                    id="standard-secondary"
                    fullWidth
                    label="Picture url"
                    color="secondary"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                  />
                </>
              )}
              <TextFld
                id="standard-secondary"
                fullWidth
                label="Email"
                color="secondary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextFld
                id="standard-secondary"
                fullWidth
                label="Password"
                color="secondary"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <ColorButton
                variant="contained"
                color="primary"
                type="submit"
                className={classes.margin}
              >
                {onRegister ? 'Register' : 'Login'}
              </ColorButton>
            </form>
            <div
              className="my-3 w-100"
              style={{
                borderTop: '2px solid red'
              }}
            >
              {onRegister ? (
                <h6 className="mt-3">
                  Already have an account ?{' '}
                  <span
                    className="btn-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => showRegister()}
                  >
                    Login
                  </span>
                </h6>
              ) : (
                <h6 className="mt-3">
                  Don't have an account ?{' '}
                  <span
                    className="btn-link"
                    style={{ cursor: 'pointer' }}
                    onClick={() => showRegister()}
                  >
                    Register
                  </span>
                </h6>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}
