const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: new GraphQLNonNull(GraphQLString), description: 'Example description' },
    age: { type: new GraphQLNonNull(GraphQLInt) },
    directorId: { type: GraphQLString },
  }),
});

module.exports = {
  DirectorType,
};
