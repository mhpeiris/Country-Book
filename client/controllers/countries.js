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
			console.log('module 1 loaded');
		});
		
	}

	$scope.getCountry = function(){
		var id = $routeParams.id;
		$http.get('/api/countries/'+id).then(function(response){
			$scope.country = response.data;
			console.log(' module 2 loaded!');
		});
		
	}

	$scope.addCountry = function(){
		$http.post('/api/countries/', $scope.country).then(function(response){
			window.location.href='#!/countries';
			console.log(' module 3 loaded!');
		});
		
	}

	$scope.updateCountry = function(){
		var id = $routeParams.id;	
		$http.put('/api/countries/'+id, $scope.country).then(function(response){
			window.location.href='#!/countries';
			console.log(' module 4 loaded!');
		});
		
	}

	$scope.removeCountry = function(id){	
		$http.delete('/api/countries/'+id).then(function(response){
			window.location.href='#!/countries';
			console.log(' module 5 loaded!');
		});
		
	}
}]);