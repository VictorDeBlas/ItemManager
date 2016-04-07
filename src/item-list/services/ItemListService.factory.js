'use strict';

module.exports = ItemListService;

/* @ngInject */
function ItemListService(itemListRemote) {
	var service = {
		loadFirstItems: loadFirstItems,
		loadMoreItems:loadMoreItems
	};

	return service;

	//////

	function loadFirstItems() {

		return itemListRemote.loadFirstItems()
			.then( function(response) {
				return response;
			});
	}

	function loadMoreItems(page) {
		return itemListRemote.loadMoreItems(page)
			.then( function(response) {
				return response;
			});
	}
	
}