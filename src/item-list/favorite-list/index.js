'use strict';

var angular = require('angular');

module.exports = angular.module('item-manager.item-list.favorite-list', [
])

.directive('ilFavorite', require('./FavoriteItems.directive'))

.name;