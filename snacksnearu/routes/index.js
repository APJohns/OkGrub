var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');

/* GET home page. */
router.get('/', placeController.index);
router.post('/explore', placeController.getPlaces);

module.exports = router;
