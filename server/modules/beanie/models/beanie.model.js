// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const { Schema, model }  = require('mongoose');

// #2 Instantiate a schema using mongoose Schema
const postSchema = new Schema({
  title: String,
  birthday: String
});

// #3 Create a model with mongoose model() method
const Beanie = model('beanie', postSchema);

module.exports = Beanie;