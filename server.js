const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const  { ApolloServer, gql } = require('apollo-server-express');
const { Beanie } = require('./server/modules/beanie/models/beanie.model');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise; // not sure what this does



const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


// connect Mongoose to your DB
mongoose.connect(
  process.env.MONGODB_URI ||
  process.env.MONGOLAB_URI ||
  'mongodb://localhost:27017/beanieDB',{ useNewUrlParser: true });

mongoose.connection.once('open', () => console.log(`Connected to mongo`));


//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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
///app.use(bodyParser.urlencoded({ extended: true }));

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