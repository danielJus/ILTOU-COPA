'use strict'

var Airport = require('../models/appModel.js').Airport
var Distance = require('../models/appModel.js').Distance

exports.list_all_Airports = (req, res) => {
	Airport.getAllAirport(req, (err, data) => {
		if (err) res.send(err)
		res.json(data)
	})
}

exports.list_all_Distances = (req, res) => {
	Distance.getAllDistance(req, (err, data) => {
		if (err) res.send(err)
		res.json(data)
	})
}
