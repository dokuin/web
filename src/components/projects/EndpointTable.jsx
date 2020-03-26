import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { MdAdd, MdEdit, MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import Confirm from '../Confirm'

import { deleteEndpoint } from '../../store/actions/project'

export default function EndpointTable(props) {
  const { endpoints, projectId, showEditModal } = props
  const dispatch = useDispatch()

  const [showConfirm, setShowConfirm] = useState()

  const removeEndpoint = (endpointId) => {
    dispatch(deleteEndpoint(endpointId, projectId))
    setShowConfirm(false)
  }

  return (
    <div className="neumorph-card p-3">
      <div className="d-flex justify-content-end mt-2 mb-4">
        <button
          title="Add New Endpoint"
          className="neumorph-btn icon p-2 d-flex align-items-center"
          style={{ backgroundColor: '#d5dbf6' }}
          onClick={() => props.addEndpoint()}
        >
          <MdAdd size="2rem" />
          Add New Endpoint
        </button>
      </div>

      {(() => {
        if (endpoints.length < 1) {
          return (
            <div>
              <h2 className="text-center">No Endpoint List</h2>
            </div>
          )
        } else {
          return (
            <Table
              className="my-auto"
              variant="primary"
              responsive
              borderless
              striped
              style={{ borderRadius: '1em' }}
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>HTTP Method</th>
                  <th>Path</th>
                  <th>Description</th>
                  <th>Query Params</th>
                  <th>Request Body</th>
                  <th align="center" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, i) => {
                  return (
                    <tr>
                      <td>{Number(i) + 1}</td>
                      <td>{endpoint.httpRequest}</td>
                      <td>{endpoint.path}</td>
                      <td>{endpoint.description}</td>
                      <td>{!endpoint.query ? 'No' : endpoint.query}</td>
                      <td>{!endpoint.reqBody ? 'No' : endpoint.reqBody}</td>
                      <td className="d-flex justify-content-center">
                        <MdEdit
                          title="Edit endpoint"
                          size="2em"
                          className="neumorph-btn icon p-1 mr-2"
                          onClick={() => showEditModal(i)}
                        />
                        <MdDelete
                          title="Delete endpoint"
                          size="2em"
                          className="neumorph-btn icon p-1 ml-2"
                          onClick={() => setShowConfirm(true)}
                        />
                        <Confirm
                          confirm={showConfirm}
                          title={'Remove endpoint?'}
                          msg={
                            'The endpoint will be remove from project endpoint list. Do you agree?'
                          }
                          ok={() => removeEndpoint(i)}
                          cancel={() => setShowConfirm(false)}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          )
        }
      })()}
    </div>
  )
}
