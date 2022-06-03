const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// const typeDefs = gql`
//   type Service {
//     _id: ID
//     name: String
//     description: String
//     image: String
//     quantity: Int
//     price: Float
//   }
//   type Order {
//     _id: ID
//     purchaseDate: String
//     services: [Service]
//   }
//   type User {
//     _id: ID
//     firstName: String
//     lastName: String
//     email: String
//     orders: [Order]
//   }
//   type Auth {
//     token: ID
//     user: User
//   }
//   type Query {
//     services(_id: ID!, name: String): [Service]
//     user: User
//     order(_id: ID!): Order
//   }
// `;

module.exports = typeDefs;
