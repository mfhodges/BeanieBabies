// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const mongoose = require('mongoose')
const {Schema}= mongoose;

// #2 Instantiate a schema using mongoose Schema
const beanieSchema = new Schema({
  title: String,
  birthday: String,
  zodiac: String,
  img: String,
  theme: String,
  styleNumber: String,
  color:String,
  animal:String,
  subTheme: String,
  id: Number
});

// #3 Create a model with mongoose model() method
const Beanie = mongoose.model('beanie', beanieSchema);


module.exports = {
  Beanie
};