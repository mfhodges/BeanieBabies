// #1 Import Express and Apollo Server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

// #6 Initialize an Express application
const app = express();
// Apply CORS so server can be on the same domain
app.use(cors());

const port = process.env.PORT || 5000;


////// GRAPHQL SERVER /////
// #2 Import mongoose
//const mongoose = require('./config/database');

// #3 Import GraphQL type definitions
const typeDefs = require('./modules/beanie/graphqlSchema');
// #4 Import GraphQL resolvers
const resolvers = require('./modules/beanie/resolvers');

// #5 Initialize an Apollo server
const server = new ApolloServer({ 
  typeDefs,
  resolvers,
  playground: true,
  introspection:true 
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// #7 Use the Express application as middleware in Apollo server
// and set to path /graphql
server.applyMiddleware({ app, path: '/graphql' });



// if in production serve React app from build
// if not in production start app & server with yarn dev - runs them on diff ports
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



// #8 Set the port that the Express application will listen to
app.listen(port, () => 
console.log(
  `Listening on port ${port}`,
  `\nWebsite → http://localhost:${3000}`,
  `\nGraphQL   → http://localhost:${port}${server.graphqlPath}/`));
