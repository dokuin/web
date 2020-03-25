import React, { useState } from 'react'

import {
  makeStyles,
  Drawer,
  Fab,
  ListItem,
  List,
  ListItemText,
  Divider
} from '@material-ui/core'
import { MdDelete } from 'react-icons/md'

import { MdMenu } from 'react-icons/md'
import Confirm from '../Confirm'
import { useDispatch } from 'react-redux'

import { deleteProject as deleteProjectAction } from '../../store/actions/project'

const useStyles = makeStyles({
  paper: {
    background: '#d5dbf6',
    width: '20em'
  }
})

const Sidebar = (props) => {
  const classes = useStyles()
  const { projects } = props
  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const select = (id) => {
    props.selectProject(id)
  }

  const deleteProject = (id) => {
    dispatch(deleteProjectAction(id))
    setOpenDialog(false)
  }

  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <Fab
        className="neumorph-btn icon mt-2 mx-3"
        style={{ backgroundColor: '#d5dbf6' }}
        onClick={() => setOpen(!open)}
      >
        <MdMenu size="2rem" />
      </Fab>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        classes={{ paper: classes.paper }}
        onClose={() => setOpen(!open)}
      >
        <div className="m-2">
          <div className="neumorph-card p-1">
            <h4 className="my-auto text-center">Project list</h4>
          </div>
          <p className="my-2">
            Total : {projects.length > 1 ? projects.length : 1}
          </p>
          <hr className="mt-0" />
          <List component="nav">
            {projects.map((project, i) => {
              return (
                <>
                  <ListItem
                    key={i}
                    className="d-flex justify-content-between mx-auto"
                    button
                  >
                    <span className="w-100" onClick={() => select(i)}>
                      <ListItemText primary={project.name} />
                    </span>
                    <span className="d-flex align-items-center my-auto">
                      <MdDelete
                        size="2em"
                        className="neumorph-btn icon p-1"
                        onClick={() => {
                          console.log(i)
                          setOpenDialog(true)
                        }}
                      />
                      <Confirm
                        confirm={openDialog}
                        title={'Remove project?'}
                        msg={
                          'You are about to delete your project from project list. Do you agree?'
                        }
                        ok={() => {
                          deleteProject(i)
                        }}
                        cancel={() => setOpenDialog(false)}
                      />
                    </span>
                  </ListItem>
                  <Divider />
                </>
              )
            })}
          </List>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
