var myApp = angular.module('myApp');

myApp.controller('CountriesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('CountriesController loaded!');

	$scope.getCountries = function(){
		/* Doesn't exist anymore
		$http.get('/api/countries').success(function(response){
			$scope.countries = response;
		});
		new method */
		$http.get('/api/countries').then(function(response){
			$scope.countries = response.data;
		});
		
	}
}]);