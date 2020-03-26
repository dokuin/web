import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'

const Confirm = (props) => {
  const handleClose = () => {
    props.cancel()
  }

  return (
    <>
      <Dialog
        open={props.confirm}
        onClose={handleClose}
        onExit={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.msg}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            autoFocus
            onClick={() => {
              props.ok()
              handleClose()
            }}
          >
            Agree
          </Button>
          <Button color="primary" onClick={() => handleClose()}>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Confirm
