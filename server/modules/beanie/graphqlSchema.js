// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
// #3 Define the respective type with three fields
// Note that the _id is created automatically by mongoose
const typeDefs = gql`

  type Beanie {
    _id: ID,
    title: String,
    birthday: String
    
  },
  
  type Query {
    getBeanies: [Beanie]
  },
  
  type Mutation {
    addBeanie(title: String!, birthday: String!): Beanie,
  }
`;

module.exports = typeDefs;