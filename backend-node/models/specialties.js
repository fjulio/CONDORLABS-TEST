'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SpecialtieSchema = Schema({
	name: String,
	createdBy: Number,
	createdAt: Date,
	updatedBy: Number,
	updatedAt: Date,
});

module.exports = mongoose.model('specialties', SpecialtieSchema);