const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const  { ApolloServer, gql } = require('apollo-server-express');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const schema = gql`
  type Query {
    me: User
  }
 
  type User {
    username: String!
  }
`;
 
const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'maddy hodges',
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  playground: true,
  introspection: true
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.applyMiddleware({ app, path: '/graphql' });

/**
// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
}); */
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
  `\nWebsite → http://localhost:${3000}`,
  `\nGraphQL   → http://localhost:${port}${server.graphqlPath}/`));