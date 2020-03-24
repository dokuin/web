import React, { useState, useEffect } from "react";
import LoginBg from "../assets/LoginBg.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Image } from "react-bootstrap";
import {Button, Fab, TextField } from "@material-ui/core";
import { yellow, red } from "@material-ui/core/colors";
import { Slide, Fade } from 'react-reveal'
import { Link } from 'react-router-dom'






const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

const TextFld = withStyles(theme => ({
  root: {
    marginBottom: "20px"
  }
}))(TextField);

const ColorButton = withStyles(theme => ({
  root: {
    marginTop: "20px",
    width: "100%",
    backgroundColor: red[400],
    "&:hover": {
      backgroundColor: red[700]
    }
  }
}))(Button);


export default function() {
  const classes = useStyles();
  const [register,setRegister]=useState(false)
  const [Fname,setName]=useState('')
  const [imageUrl,setimageUrl]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const showRegister = () =>{
    setRegister(!register)
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        top: "0",
        left: "0",
        right: "0",
        backgroundColor: "white"
      }}
    >
      <Fade right>
      <div
        style={{
          position: "fixed",
          right: "0"
        }}
        >
        <Image src={LoginBg} />
      </div>
        </Fade>
      <Fade left >
      <div
        style={{
          height: "50vh",
          width: "30vw",
          position: "absolute",
          marginTop: "15vh",
          marginLeft: "20vh",
          borderRadius: "60px"
        }}
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Link to="/">
          <Button
        variant="contained"
        color="primary"
        className={classes.button}
        style={{
          position:'absolute',
          top:'0',
          left:'0',
          marginTop:'-10vh'
        }}
      >
        {"< BACK"}
      </Button>
        </Link>
        <h1
          style={{
            width: "100%",
            borderBottom: "2px solid red"
          }}
        >
         {
          register ? 'REGISTER' : 'LOGIN'
         } 
        </h1>
        <div
          className={classes.root}
          style={{
            padding: "30px"
          }}
        >
          <form className={classes.root} noValidate autoComplete="off">
          {
            register &&
            <>
            <TextFld
            id="standard-secondary"
            fullWidth
            label="Full Name"
            color="secondary"
            value={Fname}
            onChange={e => setName(e.target.value)}
            />

            <TextFld
              id="standard-secondary"
              fullWidth
              label="Picture url"
              color="secondary"
              value={imageUrl}
              onChange={e => setimageUrl(e.target.value)}
            />
            </>
            
          } 
            <TextFld
              id="standard-secondary"
              fullWidth
              label="Email"
              color="secondary"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextFld
              id="standard-secondary"
              fullWidth
              label="Password"
              color="secondary"
              value={password}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              {
                register ? 'Register' : 'Login'
              }
            </ColorButton>
          </form>
        <div
          style={{
            position: "relative",
            marginTop:'20px',
            marginBottom: "-20px",
            width: "100%",
            borderTop: "2px solid red"
          }}
          >
          {
            register ? 
            <h6
            style={{
              marginTop: "10px",
            }}
            >
            already have account ? <Button onClick={()=> showRegister()} color="primary">Login</Button>
          </h6>
            :
            <h6
            style={{
              marginTop: "10px",
              
            }}
            >
            dont have account ? <Button onClick={()=> showRegister()} color="primary">Register</Button>
          </h6>
          }
        </div>
        </div>
      </div>
          </Fade>
    </div>
  );
}
