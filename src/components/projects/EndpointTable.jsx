import React from 'react'
import { Table } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
export default function EndpointTable() {
  return (
    <div className="neumorph-card p-3">
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
            <th>index</th>
            <th>HTTP Method</th>
            <th>Path</th>
            <th>Description</th>
            <th>Query Params</th>
            <th>Request Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>GET</td>
            <td>/movies</td>
            <td>Get All movies</td>
            <td>no</td>
            <td>no</td>
            <td>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MdEdit
                  title="Delete endpoint"
                  size="2em"
                  className="neumorph-btn icon p-1"
                />
                <FaTrash
                  title="Edit endpoint"
                  size="2em"
                  className="neumorph-btn icon p-1"
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>POST</td>
            <td>/movies</td>
            <td>Get All movies</td>
            <td>key = id, value = 129nas </td>
            <td>no</td>
            <td>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <MdEdit
                  title="Delete endpoint"
                  size="2em"
                  className="neumorph-btn icon p-1"
                />
                <FaTrash
                  title="Edit endpoint"
                  size="2em"
                  className="neumorph-btn icon p-1"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
