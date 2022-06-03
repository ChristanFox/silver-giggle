const { AuthenticationError } = require("apollo-server-express");
const { User, Service, Order, Services } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    services: async (parent, name) => {
      return Service.find();
    },
    service: async (parent, { _id }) => {
      return Service.findOne({ _id });
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("orders");
    },
  },
};

module.exports = resolvers;
