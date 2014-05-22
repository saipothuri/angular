'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ngSanitize'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'hotelcontroller'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/Details/:key', {templateUrl: 'partials/Details.html', controller: 'Detailscontroller'});
  $routeProvider.when('/NewHotel', {templateUrl: 'partials/NewHotel.html', controller: 'NewHotelcontroller'});
  $routeProvider.when('/sample', {templateUrl: 'partials/Sample.html',controller: 'samplecontroller'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
