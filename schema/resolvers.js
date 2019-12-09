/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
const { PubSub } = require('apollo-server-express');
const { Director } = require('../mongoDB/userSchema');

const pubsub = new PubSub();
const TOPIC = 'infoTopic';


const resolvers = {

  Query: {

    director: async (parent, args) => {
      const res = await Director.findById(args._id);
      return res;
    },

    directors: async () => {
      const res = await Director.find({});
      return res;
    },

  },


  Mutation: {
    addDirector: async (parent, args) => { // good working
      const director = new Director({
        id: args.id,
        name: args.name,
        age: args.age,
        directorId: args.directorId,
      });
      const res = await director.save();
      res && pubsub.publish(TOPIC, { info: 'Added new director' }); // checking
      return res;
    },

    updateDirector: async (parent, args) => { // good working
      const updateDirector = await Director.findByIdAndUpdate(
        args.id,
        { $set: { name: args.name, age: args.age } },
        { new: true },
      );
      updateDirector && pubsub.publish(TOPIC, { info: `Director with _id: ${args.id} updated` });// checking
      return updateDirector;
    },

    deleteDirector: async (parent, args) => { // good working
      const delDirector = await Director.findByIdAndRemove(args.id);
      delDirector && pubsub.publish(TOPIC, { info: `Director with _id:${args.id} deleted` }); // checking
      return delDirector;
    },
  },


  Subscription: {
    info: {
      subscribe: () => pubsub.asyncIterator([TOPIC]),
    },
  },
};

module.exports = resolvers;
