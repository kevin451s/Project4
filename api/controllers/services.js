var service = require('../models/service')
function index(req, res) {
  service.find({})
    .exec(function(err, service) {
      if(err) throw err;

      res.render('services/index')
    })
}
