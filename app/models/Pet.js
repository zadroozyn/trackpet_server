var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var petSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: false}
});

// the schema is useless so far
// we need to create a model using it
var Pet = mongoose.model('Pet', petSchema);

// make this available to our users in our Node applications
module.exports = Pet;
