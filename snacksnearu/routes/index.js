var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');

/* GET home page. */
router.get('/', placeController.getPlaces);
router.post('/', placeController.getPlaces);

module.exports = router;
