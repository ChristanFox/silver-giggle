// import the gql tagged template function
const { gql } = require("apollo-server-express");
const { User, Service, Order } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.findOne({ _id }).select("-__v -password").populate("orders");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    service: async (parent, { _id }) => {
      return Service.findOne({ _id });
    },
    services: async () => {
      return Service.find();
    },
    orders: async () => {
      return Order.find().populate("user");
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
