var express = require('express');
var router = express.Router();

var pictureController = require('../controllers/pictures')

router.route('/')
// Get all Pictures
  .get(pictureController.index)
// Create new picture
  .post(pictureController.create);

router.route('/:id')
  // GET return specific pictures
  .get(pictureController.show)

  // PATCH update existing picture
  .patch(pictureController.patch)

  // DELETE remove specific picture from DB
  .delete(pictureController.delete);


module.exports = router;
