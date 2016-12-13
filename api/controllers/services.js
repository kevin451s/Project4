var Service = require('../models/service')
// GET
function getAll(request, response) {
  Service.find(function(error, services) {
    if(error) response.json({message: 'Could not find any services'});

    response.json({services: services});
  }).select('-__v');
}

// POST
function createService(request, response) {
  var service = new Service(request.body);

  service.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate service b/c:' + error});

    response.json({service: service});
  });
}

// GET
function showService(request, response) {
  var id = request.params.id;

  Service.findById({_id: id}, function(error, service) {
    if(error) response.json({message: 'Could not find service b/c:' + error});

    response.json({service: service});
  }).select('-__v');
}

// updateService
function updateService(request, response) {
  var id = request.params.id;

  Service.findById({_id: id}, function(error, picture) {
    if(error) response.json({message: 'Could not find service b/c:' + error});

    if(request.body.title) picture.title = request.body.title;
    if(request.body.description) picture.description = request.body.description;

    service.save(function(error) {
      if(error) response.json({messsage: 'Could not update service b/c:' + error});

      response.json({message: 'Service successfully updated', service: service});
    });
  }).select('-__v');
}

// DELETE PICTURE
function deleteService(request, response) {
  var id = request.params.id;

  Service.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete service b/c:' + error});

    response.json({message: 'Service successfully deleted'});
  }).select('-__v');
}
module.exports = {
  index: getAll,
  create: createService,
  show: showService,
  patch: updateService,
  delete: deleteService
}
