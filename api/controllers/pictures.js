var Picture = require('../models/pictures.js')
// getAll
function getAll(request, response) {
  Picture.find(function(error, pictures) {
    if(error) response.json({message: 'Could not find any pictures'});

    response.json({pictures: pictures});
  }).select('-__v');
}
// POST
function createPicture(request, response) {
  var picture = new Picture(request.body);

  picture.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate picture b/c:' + error});

    response.json({picture: picture});
  });
}

module.exports = {
  index: getAll,
  create: createPicture,
}
