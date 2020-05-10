//server.js
//var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
import { graphqlExpress,graphiqlExpress,} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './src/schema';




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
app.listen(port);