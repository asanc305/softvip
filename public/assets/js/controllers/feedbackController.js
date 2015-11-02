angular.module('feedbackControl', ['feedbackService'])

    .controller('feedbackController', function(Feedback) 
    {
	    var vm = this ;	
		
		vm.tagline = 'Its working!';

	    vm.formData = {} ;
		vm.dbdata = {} ;

		vm.addFeedback = function() 
		{
			vm.processing = true ;

			Feedback.get()
				.success(function(data)
				{
					vm.processing = false ;
					vm.dbdata = data ;
					alert('BACK!') ;
				}) ;
		};
					
	
    });
