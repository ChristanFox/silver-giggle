// import the gql tagged template function
const { gql } = require('apollo-server-express');

const resolvers = {
  Query: {
    helloWorld: () => {
      return 'Hello world!';
    }
  }
};

module.exports = resolvers;