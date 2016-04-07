'use strict';

var angular = require('angular');

module.exports = angular.module('item-manager.item-list.services', [
])

//.factory('Item', require('./Item.factory'))
.factory('itemListRemote', require('./ItemListRemote.factory'))
.factory('itemListService', require('./ItemListService.factory'))

.name;