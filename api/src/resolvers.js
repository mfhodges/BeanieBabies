/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

/*
_ - initial value -- which is nothing
__ - arguments -- which is nothing
ctx is context -- which is the models
info is the AST -- you dont really use this
*/

module.exports = {
  Query: {
    hello: () => 'Hello World'
  }
}

/*
{
  Query: {
    pets(_, {input}, ctx,info) {
      console.log("shit")
      return ctx.models.Pet.findMany(input)
    },
    pet(_,{input},ctx,info){
      console.log("why")
      return ctx.model.Pet.findOne(input)
    }
  },
  Pet: {
    img(pet) {
      return pet.type === 'DOG'
        ? 'https://placedog.net/300/300'
        : 'http://placekitten.com/300/300'
    }
  },
  User: {
    
  }
}

Mutation: {
    
  }
*/