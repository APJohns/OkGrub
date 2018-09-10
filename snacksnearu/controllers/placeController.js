const mongoose = require('mongoose');
const yelp = require('yelp-fusion');
require('dotenv').config({path: 'variables.env'});
const async = require('async');
const request = require('request');

const client = yelp.client(process.env.YELPKEY);

exports.index = (req, res) => {
	res.render('index', { title: 'SnacksNearU' });
}

exports.getPlaces = (req, res) => {
	if (req.method == 'POST') {
		console.log(req.body);
		
		let searchRequest = {
			term: req.body.search,
			latitude: req.body.lat,
			longitude: req.body.lon,
			limit: 40,
			categories: 'food'
		};

		client.search(searchRequest).then(response => {
			let places = response.jsonBody.businesses;

			places.forEach(place => {
				console.log(place.name);
			});

			//res.json(places);
			res.render('explore', { title: 'SnacksNearU', places: places });
			
		}).catch(e => {
			console.log(e);
		});
	} else {
		res.render('explore', { title: 'SnacksNearU' });
	}
}
