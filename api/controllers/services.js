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

module.exports = {
  index: getAll,
  create: createService,
}
