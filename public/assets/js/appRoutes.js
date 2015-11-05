angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'homeController',
			controllerAs: 'home'
		})

		.when('/about', {
			templateUrl: 'app/views/pages/about.html',
			controller: 'aboutController',
			controllerAs: 'about'
		})

		.when('/programs', {
			templateUrl: 'app/views/pages/programs.html',
			controller: 'programsController',
			controllerAs: 'programs'	
		})

		.when('/report', {
			templateUrl: 'app/views/pages/report.html',
			controller: 'reportController',
			controllerAs: 'cReport'
		})

		.when('/feedback', {
			templateUrl: 'app/views/pages/feedbackForm.html',
			controller: 'feedbackController',
			controllerAs: 'fcontrol'
		})

    .when('/question', {
      templateUrl: 'app/views/pages/questionForm.html',
      controller: 'questionController',
      controllerAs: 'qcontrol'
    });

	$locationProvider.html5Mode(true);

});
