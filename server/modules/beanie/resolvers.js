// #1 Import the model created with mongoose
const {Beanie} = require('./models/beanie.model');

// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "beanies" must return values in response to
 * the query "beanies" in GraphQL schema.
 */
const resolvers = {
  Query: {
      getBeanies: async () => await Beanie.find({}).exec()
  },
  Mutation: {
      addBeanie: async (_, args) => {
          try {
              let response = await Beanie.create(args);
              return response;
          } catch(e) {
              return e.message;
          }
      }
  }
};

/**
 * Mutation resolver addBeanie creates a new document in MongoDB
 * in response to the "addBeanie" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */

module.exports = resolvers;

