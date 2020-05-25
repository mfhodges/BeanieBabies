// #1 Import the model created with mongoose
const {Beanie} = require('./models/beanie.model');


// #2 Create resolver functions to handle GraphQL queries
/**
 * Query resolver "beanies" must return values in response to
 * the query "beanies" in GraphQL schema.
 */
const resolvers = {
  Query: {
      getBeanies: async (_,args) => {
          console.log("_",_)
          console.log("args",args)
          if ('input' in args) {
              console.log("args.input.month",args.input.month)
              const birthday = {"birthday.month":args.input.month}
              if ('day' in args.input) {
                  birthday['birthday.day'] = args.input.day
              }
              console.log("birthday",birthday)
              return await Beanie.find(birthday).exec()
          } 
          if ('search' in args) {
              console.log("args.search", args.search);
              const result = await Beanie.find({
                  $text: { $search: args.search }}).exec();
              console.log("result",result)
              return result
            }
          return await Beanie.find({}).exec()
    },
    getBeanie: async (_,args) => {
        console.log("args",args);
        const bb = await Beanie.findOne(args).exec();
        console.log("bb",bb);
       return bb;
    },
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
 *  Mutation: {
      addBeanie: async (_, args) => {
          try {
              let response = await Beanie.create(args);
              return response;
          } catch(e) {
              return e.message;
          }
      }
  }
 * 
 */



/**
 * Mutation resolver addBeanie creates a new document in MongoDB
 * in response to the "addBeanie" mutation in GraphQL schema.
 * The mutation resolvers must return the created object.
 */

module.exports = resolvers;

