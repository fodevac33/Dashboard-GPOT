// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var voltageSchema = new Schema({
  voltage: String,
  time: String
});

// the schema is useless so far
// we need to create a model using it
var voltage = mongoose.model('Voltage', voltageSchema);

// make this available to our users in our Node applications
module.exports = voltage;