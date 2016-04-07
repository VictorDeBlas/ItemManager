'use strict';

module.exports = ItemListRemoteFactory;

/* @ngInject */
function ItemListRemoteFactory($http) {
	var service = {
		loadFirstItems: loadFirstItems,
		loadMoreItems: loadMoreItems
	};
	return service;

	//////

	function loadFirstItems() {
		return $http.get('/src/item-list/services/items.json')
			.then( function(response) {
				return response.data.items.slice(0, 5);
			});
	}

	function loadMoreItems(page) {
		var startItem = page * 5, endItem = startItem + 5;
		return $http.get('/src/item-list/services/items.json')
			.then( function(response) {
				return response.data.items.slice(startItem, endItem);
			});
	}
}