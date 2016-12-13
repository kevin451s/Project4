var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/services.js')

router.route('/')
  .get(serviceController.index)
  .post(serviceController.create)

module.exports = router;
