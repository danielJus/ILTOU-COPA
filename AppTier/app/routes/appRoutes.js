'use strict'
module.exports = function(app) {
	var Airports = require('../controller/appController.js')
	var Distance = require('../controller/appController.js')

	app.get('/airports/:page/:perPage', (req, res) => {
		Airports.list_all_Airports(req, res)
	})

	app.get('/distances/:page/:perPage', function(req, res) {
		Distance.list_all_Distances(req, res)
	})

	app.get('/', function(req, res) {
		res.send('Todo bien')
	})
}
