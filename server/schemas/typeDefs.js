const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Service {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
  }
  type Order {
    _id: ID
    purchaseDate: String
    services: [Service]
  }
  type Query {
    user(_id: ID!, username: String): User
    users: [User]
    service(_id: ID!, name: String): Service
    services: [Service]
    orders(_id: ID!): Order
    order(_id: ID!): Order
  }
`;

module.exports = typeDefs;
