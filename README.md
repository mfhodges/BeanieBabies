# BeanieBabies
Full Stack Beanie Babies Database Built with React and GraphQL. This project is solely for educational purposes. This project contains a GraphQL API which populates the data in the site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is technically two projects in one: 
- First a GraphQL API served from the `graphql/` path built with Apollo Server and Express. 
- Second a React App served with `express.static` which uses Apollo Client to connect to the GraphQL API. 

## Deployment
The app is currently hosted on Heroku's free tier and uses [mlab](https://mlab.com/) to host the database. 


## Built With
* [React](https://github.com/facebook/create-react-app) - The web framework used to serve a static site.
* [Mongoose](https://mongoosejs.com/) - Object modeling tool for MongoDB.
* [GraphQL](https://graphql.org/) - Spec for query language.
* [Apollo](https://www.apollographql.com/) - used in backend for API server and in frontend for client.


# GraphQL
The Schema is still being developed for this project. My plan is to slowly build out the API and follow the Best Practices (https://graphql.org/learn/best-practices/#versioning) to Version the continuous evolution.

Mutations have been disabled in production but can be viewed in the Docs and Schema in the GraphQL playground.

<hr>

# Resources 
- [Production Ready GraphQL](https://book.productionreadygraphql.com/) 
- [FEM Course](https://frontendmasters.com/courses/server-graphql-nodejs/)
