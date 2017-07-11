var mysql = require('mysql');
var Prvt = require('../../private.js');

module.exports = {
	pool : mysql.createPool({
		//connectionLimit : 100,
		host 			: 'localhost',
		user 			: 'root',
		password 		: Prvt.pass,
		database 		: 'ndsql101',
		debug 			: false
	})
}