// #1 Import Express and Apollo Server
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// #2 Import mongoose
const mongoose = require('./config/database');

// #3 Import GraphQL type definitions
const typeDefs = require('./modules/beanie/graphqlSchema');


// #4 Import GraphQL resolvers
const resolvers = require('./modules/beanie/resolvers');

// #5 Initialize an Apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// #6 Initialize an Express application
const app = express();

// #7 Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

// #8 Set the port that the Express application will listen to
app.listen(3001, () => {
  console.log(`Server running on http://localhost:3001${server.graphqlPath}`);
});

/** 
 * const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
// enable ssl redirect
//app.use(sslRedirect());
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));
app.listen(port);*/