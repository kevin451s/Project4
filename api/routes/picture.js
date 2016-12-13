var express = require('express');
var router = express.Router();

var pictureController = require('../controllers/pictures')

router.route('/')
  .get(pictureController.index)
  .post(pictureController.create)

module.exports = router;
