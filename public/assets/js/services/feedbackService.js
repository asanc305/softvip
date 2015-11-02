angular.module('feedbackService', [])

    .factory('Feedback', function($http)
    {

        var feedbackFactory = {};

        feedbackFactory.get = function() 
	{
            return $http.get('/api/feedback');
        };

        return feedbackFactory;

    });
