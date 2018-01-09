'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//routes
var provider_routes  = require('./routes/ProviderRoute');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//config headers http
app.use((req, res next)=> {
	res.header('Access-Control-Allow-origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accpet, Access-Control-Allow-Request-Method');
	res.header('Acces-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
});

//
app.use('/api', provider_routes);


module.exports = app;