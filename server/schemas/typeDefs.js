const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
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
    service: [Service]
  }
  type Query {
    user(_id: ID!, firstName: String, lastName: String, email: String): User
    users: [User]
    service(_id: ID!, name: String): Service
    services: [Service]
    orders(_id: ID): Order
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    addOrder(services: [ID]!): Order
  }
`;

module.exports = typeDefs;
