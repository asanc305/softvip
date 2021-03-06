angular.module('feedbackService', [])

    .factory('Feedback', function($http)
    {
      var feedbackFactory = {};

      feedbackFactory.update = function(formData) 
	    {
        return $http.post('/api/feedback', formData);
      };

      feedbackFactory.get = function()
      {
        return $http.get('/api/question') ;
      };
      return feedbackFactory;
    });
