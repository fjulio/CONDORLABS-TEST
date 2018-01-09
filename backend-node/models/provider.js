'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProviderSchema = Schema({
	firstName: String,
	lastName: String,
	middleName: String,
	email: String,
	projectedStartDate: Date,
	employerId: Number,
	providerType: String,
	staffStatus: String,
	assignedTo: String,
	status: String,
	createdBy: Number,
	createdAt: Date,
	updatedBy: Number,
	updatedAt: Date,
	specialty:{ type: Schema.ObjectId, ref:'specialties'}

});

module.exports = mongoose.model('providers', ProviderSchema);