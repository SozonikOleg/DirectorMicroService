const graphql = require('graphql');
const { DirectorType } = require('../../types/types');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addDirector: {
      type: DirectorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        directorId: { type: new GraphQLNonNull(GraphQLInt) },
      },
    },
    deleteDirector: {
      type: DirectorType,
      args: { _id: { type: GraphQLString } },
    },
    updateDirector: {
      type: DirectorType,
      args: {
        _id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
    },
  }),
});
