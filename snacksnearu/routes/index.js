var express = require('express');
var router = express.Router();
const placeController = require('../controllers/placeController');

/* GET home page. */
router.get('/', placeController.index);
//router.post('/', placeController.updateLocation);
router.get('/explore', placeController.getPlaces);
router.post('/explore', placeController.getPlaces);

module.exports = router;
