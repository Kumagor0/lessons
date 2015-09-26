angular.module("App", ['ui.router'])

    .config(function config($stateProvider) {
        $stateProvider.
                state('index', {
                	url: '/api/lessons',
                	templateUrl: 'partials/lessons.html',
    				controller: 'MainController'
				})

	})

	.controller('MainController', function($scope) {
		$scope.text = "Hello world!";
	})