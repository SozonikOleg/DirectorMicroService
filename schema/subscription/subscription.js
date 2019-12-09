const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

module.exports = new GraphQLObjectType({
  name: 'Subscription',
  fields: () => ({
    info: { type: GraphQLString },
  }),
});
