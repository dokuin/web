import React, { useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import { MdClear, MdEdit, MdSave } from 'react-icons/md'

const ProjectDetailForm = () => {
  const [disable, setDisable] = useState(true)

  const disableForm = () => {
    setDisable(!disable)
  }

  return (
    <Row>
      <Col
        className="neumorph-card"
        style={{ padding: '20px' }}
        md={{ span: 8, offset: 2 }}
      >
        <div className="neumorph-card d-flex justify-content-between p-2 mb-5">
          <h2 className="ml-3 my-auto">Project Detail</h2>
          <div className="d-flex align-items-center">
            {disable ? (
              <MdEdit
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-3"
                title="Edit Detail"
                onClick={() => disableForm()}
              />
            ) : (
              <MdSave
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-5"
                title="Save"
                onClick={() => disableForm()}
              />
            )}
            {!disable ? (
              <MdClear
                size="2em"
                className="neumorph-btn icon p-1 my-0 mr-2"
                title="Cancel Edit"
                onClick={() => disableForm()}
              />
            ) : (
              <p></p>
            )}
          </div>
        </div>

        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Name
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value="tokomedia"
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Base URL
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value="https://localhost:3000"
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Author
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                placeholder="Large text"
                value="Oasis"
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group>
          <Form.Row>
            <Form.Label column lg={3}>
              Project Description
            </Form.Label>
            <Col>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Large text"
                value="It is practice project for REST API"
                disabled={disable}
              />
            </Col>
          </Form.Row>
        </Form.Group>
      </Col>
    </Row>
  )
}

export default ProjectDetailForm
