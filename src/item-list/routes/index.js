'use strict';

var angular = require('angular');

module.exports = angular.module('item-manager.item-list.routes', [

	require('angular-route'),
])

.config(require('./ItemListRoute.config'))

.name;