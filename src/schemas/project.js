import { gql } from 'apollo-boost';

export const FETCH_ALL_PROJECTS = gql`
  query {
    projects {
      projectId
      ownerId
      name
      baseURL
      description
      members
      endpoints
    }
  }
`;

export const FIND_ONE_PROJECT = gql`
  query FindOneProject(
    $projectId: ID!
    $ownerId: ID!
  ) {
    findOneProject(
      projectId: $projectId
      ownerId: $ownerId
    ) {
      projectId
      ownerId
      name
      baseURL
      description
      members
      endpoints
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $ownerId: ID!
    $name: String!
    $baseURL: String!
    $description: String
    $members: [UserInput]
    $endpoints: [EndpointInput]
    $token: String!
  ) {
    createProject(
      ownerId: $ownerId
      name: $name
      baseURL: $baseURL
      description: $description
      members: $members
      endpoints: $endpoints
      token: $token
    ) {
      projectId
      ownerId
      name
      baseURL
      description
      members
      endpoints
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $projectId: ID!
    $ownerId: ID!
    $name: String!
    $baseURL: String!
    $description: String
    $members: [UserInput]
    $endpoints: [EndpointInput]
    $token: String!
  ) {
    updateProject(
      projectId: $projectId
      ownerId: $ownerId
      name: $name
      baseURL: $baseURL
      description: $description
      members: $members
      endpoints: $endpoints
      token: $token
    ) {
      projectId
      ownerId
      name
      baseURL
      description
      members
      endpoints
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject(
    $ownerId: ID!
    $projectId: ID!
    $token: String!
  ) {
    deleteProject(
      userId: $userId
      projectId: $projectId
      token: $token
    ) {
      projectId
      ownerId
      name
      baseURL
      description
      members
      endpoints
    }
  }
`;
