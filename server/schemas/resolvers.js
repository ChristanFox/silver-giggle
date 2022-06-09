// import the gql tagged template function
const { gql } = require("apollo-server-express");
const { User, Service, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      return User.findOne({ _id })
        .select("-__v -password")
        .populate("orders.service");
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
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect password");
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new AuthenticationError("Incorrect password");
      }

      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { service }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ service });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateOrder: async (parent, { service }, context) => {
      //update order by finding ID and then returning new changes
      console.log(context);
      if (context.user) {
        const order = new Order({ service });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    }
  },
};

module.exports = resolvers;
