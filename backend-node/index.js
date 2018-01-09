'use strict'
var Provider = require('./models/provider');
var mongoose = require('mongoose');
var urlDB = 'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1';

var app = require('./app');
var port = process.env.PORT || 3987;
mongoose.connect(urlDB, (err, res) =>{
	if(err){
		throw err;
	}else {
			console.log('the DB is running');
			app.listen(port, function(){
			console.log("the server Api REST is listen");
		});
	}
});