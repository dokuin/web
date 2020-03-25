import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Modal, Form, Row, Col } from 'react-bootstrap'
import {
  Select,
  MenuItem,
  withStyles,
  InputBase,
  Switch,
  FormControlLabel
} from '@material-ui/core'

import AddQueryParams from './addEndpointModal/AddQueryParams'
import AddReqBody from './addEndpointModal/AddReqBody'

import { addEndpoint } from '../../store/actions/project'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase)

export default function AddEndpointModal(props) {
  const dispatch = useDispatch()

  const [httpRequest, setHttpRequest] = useState('GET')
  const [path, setPath] = useState('/')
  const [reqDescription, setReqDescription] = useState('Get all user data')
  const [useQuery, setUseQuery] = useState(false)
  const [useBody, setUseBody] = useState(false)
  const [successResponse, setSuccessResponse] = useState('')
  const [errorResponse, setErrorResponse] = useState('')
  const [query, setQuery] = useState('')
  const [reqBody, setReqBody] = useState('')

  const toSaveEndpoint = () => {
    const { projectId } = props
    let endpoint = {
      path: path,
      description: reqDescription,
      query: useQuery ? JSON.stringify(query) : false,
      reqBody: useBody ? JSON.stringify(reqBody) : false,
      successResponse: JSON.stringify(successResponse),
      errorResponse: JSON.stringify(errorResponse)
    }
    dispatch(addEndpoint(endpoint, projectId))
    reset()
    props.handleClose()
  }

  const reset = () => {
    setPath('/')
    setReqDescription('Get all user data')
    setUseQuery(false)
    setUseBody(false)
    setSuccessResponse('')
    setErrorResponse('')
    setQuery('')
    setReqBody('')
  }

  return (
    <>
      <Modal
        className="border-0"
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Body className="d-flex flex-column">
          <Row>
            <Col sm={12} md={6}>
              <Form className="neumorph-card bg-light p-3">
                <div className="neumorph-card bg-light d-flex justify-content-center p-1 py-2 ml-2 mb-3">
                  <h3 className="my-auto ml-2">Add New Endpoint</h3>
                </div>
                <div className="px-3">
                  <Form.Group className="d-flex flex-column">
                    <Form.Label className="m-0">HTTP Method :</Form.Label>
                    <Select
                      className="mt-2"
                      value={httpRequest}
                      onChange={(e) => setHttpRequest(e.target.value)}
                      input={<BootstrapInput />}
                    >
                      <MenuItem value="GET">GET</MenuItem>
                      <MenuItem value="POST">POST</MenuItem>
                      <MenuItem value="PUT">PUT</MenuItem>
                      <MenuItem value="PATCH">PATCH</MenuItem>
                      <MenuItem value="DELETE">DELETE</MenuItem>
                      <MenuItem value="COPY">COPY</MenuItem>
                      <MenuItem value="HEAD">HEAD</MenuItem>
                      <MenuItem value="OPTIONS">OPTIONS</MenuItem>
                      <MenuItem value="LINK">LINK</MenuItem>
                      <MenuItem value="UNLINK">UNLINK</MenuItem>
                      <MenuItem value="PURGE">PURGE</MenuItem>
                      <MenuItem value="LOCK">LOCK</MenuItem>
                      <MenuItem value="UNLOCK">UNLOCK</MenuItem>
                      <MenuItem value="PROPFIND">PROPFIND</MenuItem>
                      <MenuItem value="VIEW">VIEW</MenuItem>
                    </Select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Path :</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="/users"
                      value={path}
                      onChange={(e) => setPath(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Description :</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      value={reqDescription}
                      onChange={(e) => setReqDescription(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Success Response :</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      value={successResponse}
                      onChange={(e) => setSuccessResponse(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Error Response :</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      value={errorResponse}
                      onChange={(e) => setErrorResponse(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </Form>
            </Col>
            <Col
              sm={12}
              md={6}
              className="d-flex flex-column align-items-center"
            >
              <div className="d-flex flex-wrap neumorph-card bg-light p-2">
                <FormControlLabel
                  className="m-0"
                  control={
                    <Switch
                      checked={useQuery}
                      onChange={() => setUseQuery(!useQuery)}
                      name="query"
                      color="primary"
                    />
                  }
                  label="Query Params"
                />
                <FormControlLabel
                  className="m-0"
                  control={
                    <Switch
                      checked={useBody}
                      onChange={() => setUseBody(!useBody)}
                      name="body"
                      color="primary"
                    />
                  }
                  label="Request Body"
                />
              </div>

              {/* ini buat query params */}
              {useQuery && <AddQueryParams query={query} setQuery={setQuery} />}

              {/* ini buat Request body */}
              {useBody && (
                <AddReqBody reqBody={reqBody} setReqBody={setReqBody} />
              )}
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-center">
          <button
            className="neumorph-btn py-1 px-3"
            onClick={() => toSaveEndpoint()}
          >
            Submit
          </button>
          <button
            className="neumorph-btn py-1 px-3"
            onClick={props.handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
