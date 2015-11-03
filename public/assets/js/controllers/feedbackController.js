angular.module('feedbackControl', ['feedbackService'])

    .controller('feedbackController', function(Feedback) 
    {
	    var vm = this ;	
		
		vm.tagline = 'Its working!';

		vm.addFeedback = function() 
		{
			vm.processing = true ;

			Feedback.get(vm.formData)
				.success(function(data)
				{
					vm.processing = false ;
					vm.formData = {} ;
					alert(data.message) ;
				}) ;
		};
					
	
    });
