// #1 Import the model created with mongoose
const Beanie = require('./models/beanie.model');

// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "beanies" must return values in response to
 * the query "beanies" in GraphQL schema.
 */
const resolvers = {
  Query: {
    // Query which returns posts list
    beanies: () => []//Beanie.find({}),
  },

/**
 * Mutation resolver addBeanie creates a new document in MongoDB
 * in response to the "addBeanie" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */
  Mutation: {
    addBeanie: (parent, beanie) => {
      // Create a new record in the database
      const newBeanie = new Beanie({ title: beanie.title, birthday: beanie.birthday });
      // Save the record and return it
      return newBeanie.save();
    }
  }
};

module.exports = resolvers;

