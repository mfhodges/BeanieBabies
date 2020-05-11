const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const  { ApolloServer, gql } = require('apollo-server-express');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


// Import mongoose
//const mongoose = require('./server/config/database');

//Import GraphQL type definitions
const typeDefs = require('./server/modules/beanie/graphqlSchema');

//Import GraphQL resolvers
const resolvers = require('./server/modules/beanie/resolvers');
 

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app, path: '/graphql' });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => 
console.log(
  `Listening on port ${port}`,
  `\nWebsite → http://localhost:3000`,
  `\nGraphQL   → http://localhost:${port}${server.graphqlPath}/`));