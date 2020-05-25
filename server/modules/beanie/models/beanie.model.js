// #1 Import the constructor Schema and the model() method
// Note the use of ES6 desctructuring
const mongoose = require('mongoose')
const {Schema}= mongoose;

const birthdaySchema = new Schema (
  {
    month: String,
    day: String,
    year: String
  }
)

// #2 Instantiate a schema using mongoose Schema
const beanieSchema = new Schema({
  title: String,
  birthday: birthdaySchema,
  zodiac: String,
  img: String,
  theme: String,
  styleNumber: String,
  color:String,
  animal:String,
  subTheme: String,
  id: Number
});

beanieSchema.index({
  title: "text",
  description: "text",
 });
 

// #3 Create a model with mongoose model() method
const Beanie = mongoose.model('beanie', beanieSchema);


module.exports = {
  Beanie
};