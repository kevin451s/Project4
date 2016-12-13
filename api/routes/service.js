var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/services.js')

router.route('/')
// getAll
  .get(serviceController.index)
// post newService
  .post(serviceController.create)

router.route('/:id')
  // GET return specific pictures
  .get(serviceController.show)
  // PATCH update existing picture
  .patch(serviceController.patch)
  // DELETE remove specific picture from DB
  .delete(serviceController.delete);
  
module.exports = router;
