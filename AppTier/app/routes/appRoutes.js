'use strict'
module.exports = function(app) {
	var Airports = require('../controller/appController.js')
	var Distance = require('../controller/appController.js')

	app.get('/airports', (req, res) => {
		Airports.list_all_Airports(req, res)
	})

	app.get('/distances', function(req, res) {
		Distance.list_all_Distances(req, res)
	})

	app.get('/', function(req, res) {
		res.send('Todo bien')
	})
}
