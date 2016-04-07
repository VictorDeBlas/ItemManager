'use strict';

var angular = require('angular');

module.exports = angular.module('itemManager', [

	require('./item-list'),
	
	require('angular-route')
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/itemList'
	});
})

.name;
