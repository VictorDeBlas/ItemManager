'use strict';

var angular = require('angular');

module.exports = angular.module('itemManager', [

	require('./item-list'),

	require('ng-dialog'),
	require('angular-route')
])

.config(function($routeProvider) {

	$routeProvider.otherwise({
		redirectTo: '/itemList'
	});
})

.name;
