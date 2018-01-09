'use strict'

var Provider = require('../models/provider');

var mongoosePaginate = require('mongoose-pagination');

function saveProvider(req,res){
	var provider = new Provider();
	var params = req.body;

	provider.firstName = params.firstName;
	provider.lastName = params.lastName;
	provider.middleName = params.middleName;
	provider.email = params.email;
	provider.projectedStartDate = params.projectedStartDate;
	provider.employerId = params.employerId;
	provider.providerType = params.providerType;
	provider.staffStatus = params.staffStatus;
	provider.assignedTo = params.assignedTo;
	provider.status = params.status;
	provider.createdBy = params.createdBy;
	provider.createdAt = params.createdAt;
	provider.updatedBy = params.updatedBy;
	provider.updatedAt = params.updatedAt;
	provider.specialty = params.specialty;

	provider.save((err, providerStored)=>{
		if(err) {
			res.status(500).send({
				message: err
			});
		}else {
			if(!Provider){
				res.status(404).send({
					message: 'No provider stored'
				});
			}else{

				return res.status(200).send({
					providers : providerStored
				});
			}
		}
	})
}
function getProvider(req, res){
	var providerId = req.params.id;
	var update = req.body;

	Provider.findById(providerId, (err, Provider) =>{
		if(err) {
			res.status(500).send({
				message: 'error petition'
			});
		}else {
			if(!Provider){
				res.status(404).send({
					message: 'No exist provider'
				});
			}else{

				return res.status(200).send({
					providers : Provider
				});
			}
		}
	});
}

function getProviders(req, res){
	if(req.params.page){
		var page = req.params.page;
	}else{
		var page = 1;
	}
	var page = req.params.page;
	var itemsPerPage = 5;
	Provider.collection.find().toArray(function(err, providers){
		if(err){
			res.status(500).send({
				message: 'error petition'
			});
		}else{
			if(!providers){
				res.status(404).send({
				message: 'Not exist providers'
				});
			}else{
				return res.status(200).send({
					providers : providers
				});
			}
		}
	});
}

function updateProvider(req, res){
	var providerId = req.params.id;
	var update = req.body;

	Provider.findByIdAndUpdate(providerId, update, (err, ProviderUpdated) =>{
		if(err) {
			res.status(500).send({
				message: 'error petition'
			});
		}else {
			if(!ProviderUpdated){
				res.status(404).send({
					message: 'No providers updated'
				});
			}else{

				return res.status(200).send({
					providers : ProviderUpdated
				});
			}
		}
	});
}


function deleteProvider(req, res){
	var providerId = req.params.id;

	Provider.findByIdAndRemove(providerId, (err, providerRemoved)=>{
		if(err) {
			res.status(500).send({
				message: 'error petition'
			});
		}else {
			if(!providerRemoved){
				res.status(404).send({
					message: 'No provider removed'
				});
			}else{

				return res.status(200).send({
					providers : providerRemoved
				});
			}
		}
	});
}

module.exports = {
	saveProvider,
	getProvider,
	getProviders,
	updateProvider,
	deleteProvider
}