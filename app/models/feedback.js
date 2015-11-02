// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
	criteria1: {
		sdis: Number,
		dis: Number,
		nie: Number,
		agr: Number,
		sagr: Number
	},
	criteria2: {
		sdis: Number,
		dis: Number,
		nie: Number,
		agr: Number,
		sagr: Number
	},
	criteria3: {
		sdis: Number,
		dis: Number,
		nie: Number,
		agr: Number,
		sagr: Number
	},
	criteria4: {
		sdis: Number,
		dis: Number,
		nie: Number,
		agr: Number,
		sagr: Number
	},
	criteria5: {
		sdis: Number,
		dis: Number,
		nie: Number,
		agr: Number,
		sagr: Number
	},
	comment: [String]
});

module.exports = mongoose.model('Feedback', FeedbackSchema) ;
