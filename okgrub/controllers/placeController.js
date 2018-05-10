const mongoose = require('mongoose');
const yelp = require('yelp-fusion');
require('dotenv').config({path: 'variables.env'});

const client = yelp.client(process.env.YELPKEY);

exports.getPlaces = (req, res) => {
	if (req.method == 'POST') {
		let lat = req.body.lat.toFixed(10);
		let lon = req.body.lon.toFixed(10);
		console.log(req.body);

		let searchRequest = {
			term: 'coffee',
			latitude: lat,
			longitude: lon
		};

		client.search(searchRequest).then(response => {
			let places = response.jsonBody.businesses.slice(0, 20);

			places.forEach(place => {
				console.log(place.name);
			});

			res.json(places);
			
		}).catch(e => {
			console.log(e);
		});
	} else {
		res.render('index', { title: 'OkGrub' });
	}
}

exports.saved = (req, res) => {
	res.render('saved');
}