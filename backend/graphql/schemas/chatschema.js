import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Message {
    id: ID!
    content: String!
    sender: User!
    createdAt: String!
  }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    sendMessage(content: String!, senderId: ID!): Message!
  }

  type Subscription {
    messageSent: Message!
  }
`;
