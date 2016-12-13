var mongoose = require('mongoose');

var pictureSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  categories: []
});

var Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;
