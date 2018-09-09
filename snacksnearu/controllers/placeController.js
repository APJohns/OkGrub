const mongoose = require('mongoose');
const yelp = require('yelp-fusion');
require('dotenv').config({path: 'variables.env'});
const async = require('async');
const request = require('request');

const client = yelp.client(process.env.YELPKEY);

exports.getPlaces = (req, res) => {
	if (req.method == 'POST') {
		let lat = req.body.lat.toFixed(6);
		let lon = req.body.lon.toFixed(6);
		console.log(req.body);
		
		let searchRequest = {
			term: 'beer',
			latitude: lat,
			longitude: lon,
			limit: 40
		};

		client.search(searchRequest).then(response => {
			let places = response.jsonBody.businesses;

			places.forEach(place => {
				console.log(place.name);
			});

			res.json(places);
			
		}).catch(e => {
			console.log(e);
		});
	} else {
		res.render('index', { title: 'SnacksNearU' });
	}
}
