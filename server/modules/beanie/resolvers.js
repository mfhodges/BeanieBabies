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

    getBeanies: async () => await Beanie.find({}).exec()
  },


  Mutation: {
    addBeanie: async (parent, beanie) => {
      // Create a new record in the database
      try {
        let response = await Beanie.create({ title: beanie.title, birthday: beanie.birthday });
        return response;
      } catch(e) {
        return e.message;
      }
      //console.log(beanie);
      //const newBeanie = new Beanie({ title: beanie.title, birthday: beanie.birthday });
      // Save the record and return it
      //console.log(newBeanie);
      //return newBeanie.save();
    }
  }
};

/**
 * Mutation resolver addBeanie creates a new document in MongoDB
 * in response to the "addBeanie" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */

module.exports = resolvers;

