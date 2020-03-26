import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { runEndpoint } from "../store/actions/project";
import { Container, Row, Col } from "react-bootstrap";
import { Slide, Fade } from "react-reveal";

import { Container, Row, Col } from 'react-bootstrap'
import { Slide, Fade } from 'react-reveal'

import EndpointTable from '../components/projects/EndpointTable'
import AddEndpointModal from '../components/projects/AddEndpointModal'
import ProjectDetailForm from '../components/projects/ProjectDetailForm'
import Sidebar from '../components/projects/Sidebar'

import project from "../store/reducers/project";
// import { runEndpoint } from '../store/actions/project'

export default function ProjectPage() {
    const dispatch = useDispatch();
  const projects = useSelector((state) => state.projectReducer.projects)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const [endpointToEdit, setEndpointToEdit] = useState(0)

  // ini dari erin
  const Loading = useSelector(state => state.projectReducer.loading )
  console.log(Loading,'dari projecy')
  const generate = () => {
    dispatch(runEndpoint(projects[0]));
  };

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showEditModal = (endpointId) => {
    setEndpointToEdit(endpointId)
    setIsEdit(true)
    handleShow()
  }

  return (
    <>
      <Slide duration={500} bottom>
        <div className="wavy-background"></div>
      </Slide>
      {(() => {
        if (projects.length < 1) {
          return (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "90vh" }}
            >
              <Fade>
                <Col sm={{ span: 8, offset: 2 }} style={{ width: "100vw" }}>
                  <div className="neumorph-card p-5">
                    <h2 className="text-center mb-5">
                      You currently have no project
                    </h2>
                    <Link
                      title="Create new project"
                      to="/new-project"
                      className="d-flex justify-content-center banner-btn font-weight-bold"
                      style={{ fontSize: "1.5em" }}
                    >
                      Start New Project
                    </Link>
                  </div>
                </Col>
              </Fade>
            </div>
          );
        } else {
          return (
            <>
              <Sidebar
                projects={projects}
                selectProject={project => {
                  setSelectedProjectIndex(project);
                }}
              />
              <Container className="mb-5" style={{ minHeight: "90vh" }} fluid>
                <Fade>
                  <div className="my-5">
                    <ProjectDetailForm
                      project={projects[selectedProjectIndex]}
                      projectId={selectedProjectIndex}
                    />
                  </div>
                  <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                      <AddEndpointModal
                        projectId={selectedProjectIndex}
                        show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        isEdit={isEdit}
                        endpointToEdit={endpointToEdit}
                      />
                      <EndpointTable
                        endpoints={projects[selectedProjectIndex].endpoints}
                        projectId={selectedProjectIndex}
                        addEndpoint={() => handleShow()}
                        showEditModal={(endpointId) =>
                          showEditModal(endpointId)
                        }
                      />
                      <div className="d-flex justify-content-around my-4">
                        <button
                          className="neumorph-btn px-3 py-2"
                          style={{ fontSize: '1.5em' }}
                          onClick={handleShow}
                        >
                          Create Markdown
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Fade>
              </Container>
            </>
          );
        }
      })()}
    </>
  );
}
