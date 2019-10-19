'user strict'
var sql = require('./db.js')

//Airport object constructor
var Airport = function(Airport) {
	this.Airport = Airport.Airport
	this.status = Airport.status
	this.created_at = new Date()
}

var Distance = function(Distance) {
	this.Distance = Distance.Distance
	this.status = Distance.status
	this.created_at = new Date()
}

Airport.getAllAirport = (req, result) => {
	const {
		query: { page, perPage, nombre },
	} = req

	const from = page * perPage

	let query = `SELECT * FROM aeropuertos `
	if (nombre) query += `WHERE Airport LIKE %${nombre}% `
	query += `LIMIT ${from},${perPage}`

	sql.query(query, (err, res) => {
		if (err) {
			console.error('error: ', err)
			result(null, err)
		} else {
			console.log('Airports : ', res)
			result(null, { airports: res })
		}
	})
}

Distance.getAllDistance = (req, result) => {
	const {
		query: { from, to },
	} = req

	let query = `SELECT * FROM aeropuertos `
	if (from && to) query += `WHERE ORIG_CD = ${from} AND DEST_CD = ${to}`

	sql.query(query, (err, res) => {
		if (err) {
			console.error('error: ', err)
			result(null, err)
		} else {
			console.log('Distance : ', res)
			result(null, { distance: res })
		}
	})
}

module.exports.Airport = Airport
module.exports.Distance = Distance
