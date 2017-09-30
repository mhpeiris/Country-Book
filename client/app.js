var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'CountriesController',
		templateUrl:'views/countries.html'
	})
	.when('countries', {
		controller:'CountriesController',
		templateUrl:'views/countries.html'
	})
	.when('/countries/details/:id', {
		controller:'CountriesController',
		templateUrl:'views/country_details.html'		
	})
	.when('/countries/add', {
		controller:'CountriesController',
		templateUrl:'views/add_country.html'		
	})
	.when('/countries/edit/:id', {
		controller:'CountriesController',
		templateUrl:'views/edit_country.html'		
	})
	.otherwise({
		redirectTo: '/'
	});	
});