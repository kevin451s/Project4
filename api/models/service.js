var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
});

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
