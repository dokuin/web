import React, { useState } from 'react'

import { makeStyles, Drawer, Fab } from '@material-ui/core'
import { Badge } from 'react-bootstrap'

import { MdMenu } from 'react-icons/md'

const useStyles = makeStyles({
  paper: {
    background: '#d5dbf6',
    width: '20em'
  }
})

const Sidebar = (props) => {
  const classes = useStyles()
  const { projects } = props

  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'sticky', top: 0 }}>
      <Fab
        className="neumorph-btn icon m-3"
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
            <h4 className="my-auto text-center">
              Project list
              {projects.length > 1 ? (
                <Badge pill variant="primary">
                  {projects.length}
                </Badge>
              ) : (
                ''
              )}
            </h4>
          </div>
          <ul>
            {projects.map((project) => {
              return <li>{project.name}</li>
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  )
}

export default Sidebar
