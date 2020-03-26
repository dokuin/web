import { gql } from 'apollo-boost';

export const FETCH_ALL_USERS = gql`
  query {
    users {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;

export const FIND_ONE_USER = gql`
  query FindOneUser($userId: ID!) {
    findOneUser(userId: $userId) {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp(
    $fullName: String!
    $username: String!
    $profilePicURL: String
    $email: String!
    $password: String!
  ) {
    signUp(
      fullName: $fullName
      username: $username
      profilePicURL: $profilePicURL
      email: $email
      password: $password
    ) {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn(
    $userIdentifier: String!
    $password: String!
  ) {
    signIn(
      userIdentifier: $userIdentifier
      password: $password
    ) {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $userId: ID!
    $token: String!
    $fullName: String!
    $username: String!
    $profilePicURL: String!
    $email: String!
    $password: String!
  ) {
    updateUser(
      userId: $userId
      token: $token
      fullName: $fullName
      username: $username
      profilePicURL: $profilePicURL
      email: $email
      password: $password
    ) {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser(
    $userId: ID!
    $token: String!
  ) {
    deleteUser(
      userId: $userId
      token: $token
    ) {
      userId
      fullName
      username
      profilePicURL
      email
    }
  }
`;
