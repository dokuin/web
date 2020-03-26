import React from 'react'
import { Table } from 'react-bootstrap'
import { MdEdit, MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { deleteEndpoint }  from '../../store/actions/project'

export default function EndpointTable({project}) {

  const dispatch = useDispatch()


  const handleDelete = (desc) => {
    console.log('masuk sini')
    dispatch(deleteEndpoint(desc))
  }


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
          {
            project.endpoints.map((e,idx)=>{
            return(
              <tr key={idx}>
            <td>{idx+1}</td>
            <td>{e.httpRequest}</td>
            <td>{e.path}</td>
            <td>{e.description}</td>
            <td>{JSON.stringify(e.query) == '{}' ? 'no':'yes'}</td>
            <td>{JSON.stringify(e.query) == '{}' ? 'no':'yes'}</td>
            <td className="d-flex justify-content-center">
              <MdEdit
                title="Delete endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
                />
              <MdDelete
                title="Edit endpoint"
                size="2em"
                className="neumorph-btn icon p-1 mr-3"
                onClick={() => handleDelete(e.description)}
                />
            </td>
          </tr>
                )
            })
              }
        </tbody>
      </Table>
    </div>
  )
}
