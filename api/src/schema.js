const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 * zodiac should be in the birthday type
 */
const typeDefs = gql`
  type Pet {
    id: ID!
    link: String
    title: String!
    birthday: Birthday!
    theme: String
    styleNumber: String
    color: String
    animal: String
    subtheme: String
  }

  type Tag {
    tushTagGeneration: String
    swingTagGeneration: String
  }

  type Birthday {
    day: Int!
    month: Int!
    year: Int
    zodiac: ZodiacSign!
  }

  type ZodiacSign{
    name: String!
    symbol: String!
    startDate: String!
    endDate:String!
  }

  type Query {
    hello: String
  }

`;

module.exports = typeDefs


/*
{
  "user": {
    "id": "string",
    "username": "string"
  },
  "pet":{
    "id": "string",
    "createdAt": "number",
    "name": "string",
    "type": "string"
  }
}
*/