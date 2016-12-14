var Picture = require('../models/pictures.js')
// getAll
function getAll(request, response) {
  Picture.find(function(error, pictures) {
    if(error) response.json({message: 'Could not find any pictures'});

    response.json(pictures);

    // response.json({pictures: pictures});
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

// GET
function getPicture(request, response) {
  var id = request.params.id;

  Picture.findById({_id: id}, function(error, picture) {
    if(error) response.json({message: 'Could not find picture b/c:' + error});

    response.json({picture: picture});
  }).select('-__v');
}

// updatePicture
function updatePicture(request, response) {
  var id = request.params.id;

  Picture.findById({_id: id}, function(error, picture) {
    if(error) response.json({message: 'Could not find picture b/c:' + error});

    if(request.body.title) picture.title = request.body.title;
    if(request.body.description) picture.description = request.body.description;
    if(request.body.url) picture.url = request.body.url;

    picture.save(function(error) {
      if(error) response.json({messsage: 'Could not update picture b/c:' + error});

      response.json({message: 'Picture successfully updated', picture: picture});
    });
  }).select('-__v');
}
// DELETE PICTURE
function deletePicture(request, response) {
  var id = request.params.id;

  Picture.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete picture b/c:' + error});

    response.json({message: 'Picture successfully deleted'});
  }).select('-__v');
}
module.exports = {
  index: getAll,
  create: createPicture,
  show: getPicture,
  patch: updatePicture,
  delete: deletePicture,
}
