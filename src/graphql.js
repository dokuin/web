import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import {
  FETCH_ALL_USERS,
  FIND_ONE_USER,
  SIGN_UP,
  SIGN_IN,
  UPDATE_USER,
  DELETE_USER
} from './schemas/user';
import {
  FETCH_ALL_PROJECTS,
  FIND_ONE_PROJECT,
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT
} from './schemas/project';
import {
  FETCH_ALL_ENDPOINTS,
  FIND_ONE_ENDPOINT,
  CREATE_ENDPOINT,
  UPDATE_ENDPOINT,
  DELETE_ENDPOINT
} from './schemas/endpoint';

const client = new ApolloClient({
  uri: `http://ec2-54-153-1-136.us-west-1.compute.amazonaws.com:4000`,
  resolvers: {
    Query: {
      FETCH_ALL_USERS,
      FIND_ONE_USER,
      FETCH_ALL_PROJECTS,
      FIND_ONE_PROJECT,
      FETCH_ALL_ENDPOINTS,
      FIND_ONE_ENDPOINT
    },
    Mutation: {
      SIGN_UP,
      SIGN_IN,
      UPDATE_USER,
      DELETE_USER,
      CREATE_PROJECT,
      UPDATE_PROJECT,
      DELETE_PROJECT,
      CREATE_ENDPOINT,
      UPDATE_ENDPOINT,
      DELETE_ENDPOINT
    }
  }
});

export const wrapWithApollo = component => {
  return <ApolloProvider client={client}>{component}</ApolloProvider>;
};
