// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
	criteria1: {type: Number},
	criteria2: {type: Number},
	criteria3: {type: Number},
	criteria4: {type: Number},
	criteria5: {type: Number},
	comment: {type: String}
});

module.exports = mongoose.model('Feedback', FeedbackSchema) ;
