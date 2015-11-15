var bodyParser		= require('body-parser');    // get body-parser
var Question = require('../models/question');
var config		= require('../../config');



module.exports = function(app, express) 
{

	var apiRouter = express.Router();

  apiRouter.route('/question')
  
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

				res.json({ message: 'Question Saved!' }) ;
			});
    })
  
    .get(function(req, res) 
    {
      Question.find(function(err, question)
      {
        if (err) res.send(err) ;
        res.json(question) ;
      });
    });

  apiRouter.route('/question/:formType')

  .get(function(req, res)
  {
    Question.find({formType: req.params.formType}, function(err, question)
    {
      if (err) res.send(err) ;
      res.json(question) ;
    });
  });

  return apiRouter
};


		
