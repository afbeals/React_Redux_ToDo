var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var mysql = require('mysql');

var app = express();

var Prvt = require('./private.js');
console.log(Prvt.pass);
var pool = mysql.createPool({
	connectionLimit : 100,
	host 			: 'localhost',
	user 			: 'root',
	password 		: Prvt.pass,
	database 		: 'ndsql101',
	debug 			: false
})

function handle_database(req,res) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          console.log({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        	
		connection.query("select * from users",function(err,rows){
            connection.release();
            if(!err) {
                console.log(rows);
            }           
        });

        connection.on('error', function(err) {      
              console.log({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', './client/index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  //handle_database(req,res);
  console.log('Listening at http://localhost:3000');
});
