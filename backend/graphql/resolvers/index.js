import { PubSub } from "graphql-subscriptions";

import Message from "../../models/Message.js";
import User from "../../models/User.js";

// import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

export const resolvers = {
  Query: {
    messages: async () => await Message.find().populate('sender'),
  },
  Mutation: {
    sendMessage: async (_, { content, senderId }) => {
      const sender = await User.findById(senderId);
      const message = await Message.create({ content, sender, createdAt: new Date().toISOString() });
      pubsub.publish('MESSAGE_SENT', { messageSent: message });
      return message;
    },
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_SENT']),
    },
  },
};
