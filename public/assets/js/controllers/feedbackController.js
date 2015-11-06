angular.module('feedbackControl', ['feedbackService'])

    .controller('feedbackController', function(Feedback) 
    {
	    var vm = this ;	
		
    
		  vm.tagline = 'Its working!';

      Feedback.get()
        .success(function(data)
        {
          vm.questions = data ;
          console.log(data) ;
        }) ;

      

		  vm.addFeedback = function() 
		  {
			  vm.processing = true ;

			  Feedback.update(vm.formData)
				  .success(function(data)
				  {
					  vm.processing = false ;
					  vm.formData = {} ;
					  alert(data.message) ;
				  }) ;
		  };
					
	
    });
