import React, { useState, useEffect } from "react";
import { runEndpoint } from "../store/actions/project";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Preview = () => {
  const { id } = useParams();
  // const projects = useSelector(state => state.projectReducer.TempEP);
  const projects = useSelector(state => state.projectReducer.TempEP);
  const Loading = useSelector(state => state.projectReducer.loading )

  console.log(Loading)
  // console.log(projects, 'from preview')
  
  const getAllBody = (response) =>{
    console.log(response)
    if(response){
      if(Array.isArray(response.body)){

          return (
            <>
        {
          <>
          <p>Responses </p>
          <h5>{response.status}-{response.statusText}</h5>
          </>
        }
          <div style={{height:'25vh',overflow:'auto'}}>
          { response.body.map(e => {
            return <SyntaxHighlighter language="javascript" style={atomDark}>
              {JSON.stringify(e,null,2)}
              </SyntaxHighlighter> 
          }) }
          </div>
        </>
      )
    }else{
      return (
        <>
    {
      <>
      <p>Responses </p>
      <h5>{response.status}-{response.statusText}</h5>
      </>
    }
        <SyntaxHighlighter  language="javascript" style={atomDark}>
           {JSON.stringify(response.body,null,2)}
          </SyntaxHighlighter> 
    </>)
    }
      
    } else {
      return <p>has no responses</p>
    }
  }
  useEffect(() => {
    console.log(projects);
  }, [projects, getAllBody]);
  


  return (
    <Container style={{
      minHeight:'80vh'
    }}>
      { Loading ? 
        <h1>lOADING</h1>
       : (
        <>
          <h2>{projects.name}</h2>
          <hr />
          <h6>author: {projects.author}</h6>
          <h6>Base Url :  <a href={projects.baseURL}>{projects.baseURL}</a></h6>
          <hr />
          {

            projects.endpoints.map((e)=> 
            <>
            <h4>{e.description} {e.path}</h4>
            <hr/>
          <h5>query : {JSON.stringify(e.query)}</h5>
          <h5>body : {JSON.stringify(e.body)}</h5>
            <hr/>
              <div>
                {getAllBody(e.response)}
              </div>
            </>
            )
          }
        </>
      )}
    </Container>
  );
};

export default Preview;
