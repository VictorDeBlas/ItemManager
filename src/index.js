'use strict';

var angular = require('angular');

module.exports = angular.module('itemManager', [

	//require('./cart'),
	//require('./cart-summary'),
	//require('./products'),
	//require('./products-catalog'),

	require('angular-route'),
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/itemList'
	});
})

.name;
