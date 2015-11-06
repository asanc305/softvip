var bodyParser		= require('body-parser');    // get body-parser
var Feedback		= require('../models/feedback');
var Question = require('../models/question');
var config		= require('../../config');



module.exports = function(app, express) 
{

	var apiRouter = express.Router();

	apiRouter.route('/feedback')

		.post(function(req, res) 
		{
			var feedback = new Feedback() ;

			feedback.criteria1 = req.body.c1 ;
			feedback.criteria2 = req.body.c2 ;
			feedback.criteria3 = req.body.c3 ;
			feedback.criteria4 = req.body.c4 ;
			feedback.criteria5 = req.body.c5 ;
			feedback.comment = req.body.comment ;

			feedback.save(function(err) {
				if (err) {
					return res.send(err) ;
				}

				res.json({ message: 'Feedback Saved!' }) ;
			});
	
		});

  /*apiRouter.route('/question')
  
    .post(function(req, res)
    {
      var question = new Question() ;
      
      question.question = req.body.question ;
      question.formType = req.body.ft ;
      question.questionType = req.body.qt ;
      question.makeOptional = req.body.mo ;

      question.save(function(err) {
				if (err) {
					return res.send(err) ;
				}

				res.json({ message: 'Feedback Saved!' }) ;
			});
    });*/

  apiRouter.route('/question')
  
    .get(function(req, res) 
    {
      Question.find({formType: 'fb'}, function(err, question)
      {
        if (err) res.send(err) ;
        res.json(question) ;
      });
    });
		
	return apiRouter
};


		
