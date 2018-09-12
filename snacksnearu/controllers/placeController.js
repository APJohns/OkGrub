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
	let open_now = false;
	if (req.body.open_now == 'true') open_now = true;
	
	let searchRequest = {
		term: req.body.term,
		latitude: req.body.lat,
		longitude: req.body.lon,
		sort_by: req.body.sort_by,
		open_now: open_now,
		radius: Math.round(req.body.radius * 1609.34),
		limit: 40,
		categories: 'food'
	};

	client.search(searchRequest).then(response => {
		let places = response.jsonBody.businesses;
		if (places.length == 0) res.render('noResults', {title: 'SnacksNearU', message: 'No Results Found :('});
		else res.render('explore', { title: 'SnacksNearU', places: places, search: req.body });
		
	}).catch(e => {
		console.log(e);
	});
}
