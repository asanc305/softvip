var bodyParser		= require('body-parser');    // get body-parser
var Feedback		= require('../models/feedback');
var config		= require('../../config');



module.exports = function(app, express) 
{

	var apiRouter = express.Router();

	apiRouter.route('/feedback')

		.get(function(req, res) 
		{
			Feedback.find(function(err, feedback)
			{
				if (err) res.send(err) ;
				
				res.json(feedback) ;
			});
		});
		
		
	return apiRouter
};



		