import React, { useState, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core'

const Confirm = (props) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (props.confirm) {
      setOpen(true)
    }
  }, [props.confirm, open])

  const handleClose = () => {
    setOpen(false)
    props.cancel()
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
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
