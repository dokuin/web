import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Image } from 'react-bootstrap'
import { Button, TextField } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { Fade } from 'react-reveal'

import { IoMdArrowBack } from 'react-icons/io'
import LoginBg from '../assets/LoginBg.png'

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
  const [register, setRegister] = useState(false)
  const [Fname, setName] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const showRegister = () => {
    setRegister(!register)
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
              marginTop: register ? '2em' : 'initial'
            }}
          >
            {register ? 'REGISTER' : 'LOGIN'}
          </h1>
          <div
            className={classes.root}
            style={{
              padding: '30px'
            }}
          >
            <form className={classes.root} noValidate autoComplete="off">
              {register && (
                <>
                  <TextFld
                    id="standard-secondary"
                    fullWidth
                    label="Full Name"
                    color="secondary"
                    value={Fname}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <TextFld
                    id="standard-secondary"
                    fullWidth
                    label="Picture url"
                    color="secondary"
                    value={imageUrl}
                    onChange={(e) => setimageUrl(e.target.value)}
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
                className={classes.margin}
              >
                {register ? 'Register' : 'Login'}
              </ColorButton>
            </form>
            <div
              className="my-3 w-100"
              style={{
                borderTop: '2px solid red'
              }}
            >
              {register ? (
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
