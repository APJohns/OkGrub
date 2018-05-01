var express = require('express');
var router = express.Router();

const yelp = require('yelp-fusion');
require('dotenv').config({path: 'variables.env'});

const client = yelp.client(process.env.YELPKEY);

/* GET home page. */
router.get('/', function(req, res, next) {
  let searchRequest = {
    term: 'barrington coffee',
    location: 'boston, ma'
  };

  client.search(searchRequest).then(response => {
    let top5 = response.jsonBody.businesses.slice(0, 5);

    top5.forEach(place => {
      console.log(place.name);
    });
  }).catch(e => {
    console.log(e);
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
