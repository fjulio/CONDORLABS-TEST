'use strict'

var express = require('express');
var ProviderController = require('../controllers/providerController');

var api = express.Router();
api.post('/provider/',ProviderController.saveProvider );
api.get('/provider/:id',ProviderController.getProvider );
api.get('/providers/:page?',ProviderController.getProviders );
api.put('/provider/:id',ProviderController.updateProvider );
api.delete('/provider/:id',ProviderController.deleteProvider );

module.exports = api;