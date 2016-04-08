'use strict';

var angular = require('angular');

module.exports = angular.module('item-manager.item-list.components', [
])

.directive('ilItem', require('./Item.directive'))

.name;