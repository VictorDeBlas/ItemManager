'use strict';

var angular = require('angular');

module.exports = angular.module('item-manager.item-list', [

	require('./services'),
	require('./routes'),
])

.name;