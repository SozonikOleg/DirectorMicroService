const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { DirectorType } = require('../../types/types');

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    director: {
      type: DirectorType,
      args: { _id: { type: GraphQLString } },
    },
    directors: {
      type: new GraphQLList(DirectorType),
    },
  }),
});
