'use strict';

module.exports = ItemListRouteConfig;

/* @ngInject */
function ItemListRouteConfig($routeProvider) {
	$routeProvider.when('/itemList', {
		template: require('./ItemListRoute.tpl.html'),
		controller: ItemListRouteController,
		controllerAs: 'vm',
		resolve: {
			items: ItemListResolver,
		}
	});
}

/* @ngInject */
function ItemListResolver(itemListService) {
	return itemListService.loadFirstItems();
}

/* @ngInject */
function ItemListRouteController(items, itemListService) {
	var vm = this, page = 0;

	vm.items = items;

	vm.loadMore = loadMoreItems;

	///////


	/////// PUBLIC FUNCTIONS

	function loadMoreItems() {
		page += 1;
		itemListService.loadMoreItems(page)
			.then(loadMoreSuccess);
	}



	/////// PUBLIC FUNCTIONS

	function loadMoreSuccess( response ) {
		vm.items.push.apply(vm.items, response);
	}

	
}
