import { gql } from 'apollo-boost';

export const FETCH_ALL_ENDPOINTS = gql`
  query Endpoints(
    $projectId: ID!
  ) {
    endpoints(
      projectId: $projectId
    ) {
      projectId
      method
      path
      description
      headers
      queryParams
      body
      response
      errorResponse
    }
  }
`;

export const FIND_ONE_ENDPOINT = gql`
  query FindOneEndpoint(
    $projectId: ID!
    $endpointId: ID!
  ) {
    findOneEndpoint(
      projectId: $projectId
      endpointId: $endpointId
    ) {
      projectId
      method
      path
      description
      headers
      queryParams
      body
      response
      errorResponse
    }
  }
`;

export const CREATE_ENDPOINT = gql`
  mutation CreateEndpoint(
    $token: String!
    $projectId: ID!
    $method: String
    $path: String
    $description: String
    $headers: Object
    $queryParams: Object
    $body: Object
  ) {
    createEndpoint(
      token: $token
      projectId: $projectId
      method: $method
      path: $path
      description: $description
      headers: $headers
      queryParams: $queryParams
      body: $body
    ) {
      projectId
      method
      path
      description
      headers
      queryParams
      body
      response
      errorResponse
    }
  }
`;

export const UPDATE_ENDPOINT = gql`
  mutation UpdateEndpoint(
    $token: String!
    $projectId: ID!
    $endpointId: ID!
    $method: String
    $path: String
    $description: String
    $headers: Object
    $queryParams: Object
    $body: Object
  ) {
    updateEndpoint(
      token: $token
      projectId: $projectId
      endpointId: $endpointId
      method: $method
      path: $path
      description: $description
      headers: $headers
      queryParams: $queryParams
      body: $body
    ) {
      projectId
      method
      path
      description
      headers
      queryParams
      body
      response
      errorResponse
    }
  }
`;

export const DELETE_ENDPOINT = gql`
  mutation DeleteEndpoint(
    $token: String!
    $projectId: ID!
    $endpointId: ID!
  ) {
    deleteEndpoint(
      token: $token
      projectId: $projectId
      endpointId: $endpointId
    ) {
      projectId
      method
      path
      description
      headers
      queryParams
      body
      response
      errorResponse
    }
  }
`;
