// #1 Import the gql method from apollo-server-express
const { gql } = require('apollo-server-express');

// #2 Construct a schema with gql and using the GraphQL schema language
// #3 Define the respective type with three fields
// Note that the _id is created automatically by mongoose


/**
 * FIELDS ARE
 * 
 * astro_sign,title,link,image,Theme,Style Number,Colour,Swing Tag Generation,
 * Tush Tag Generation,Birthday,Release Date,Release Year,Retirement Date,Animal,
 * Subtheme,Size
 * 
 *  'id': 1,
    'img': "https://beaniepedia.com/beanies/files/2020/01/kenyaboo-1.jpg",
    'title': "Kenya the Ostrich (Large)",
    'birthday': "19 May",
    'theme': "Beanie Boos",
    'styleNumber': "36302",
    'color': "N/A",
    'animal': "N/A",
    'subtheme': "None",
    'zodiac':'Taurus'
 * 
 */

const typeDefs = gql`

  type Beanie {
    _id: ID,
    title: String,
    birthday: String
    zodiac: String
    img: String
    theme: String
    styleNumber: String
    color:String
    animal:String
    subTheme: String
  },

  
  type Query {
    getBeanies: [Beanie]
  },
  
  type Mutation {
    addBeanie(title: String!, birthday: String!, zodiac: String!, img: String!, theme: String!, styleNumber: String!, color: String!, animal: String!, subTheme: String
      ): Beanie,
  }
`;

module.exports = typeDefs;

/**
 * Once things are cool please add these types
 * type Tag {

  }

  type Birthday {
    day: String,
    month: String,
    
  }
 * 
 */