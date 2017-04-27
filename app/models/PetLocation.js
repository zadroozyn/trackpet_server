var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var petLocationSchema = new Schema({
  timestamp: { type: Date, required: true },
  lat: { type: String, required: false},
  lon: { type: String, required: false}
});

// the schema is useless so far
// we need to create a model using it
var PetLocation = mongoose.model('PetLocation', petLocationSchema);

// make this available to our users in our Node applications
module.exports = PetLocation;
