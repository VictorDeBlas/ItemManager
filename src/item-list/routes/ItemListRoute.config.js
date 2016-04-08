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
			totalItems: ItemListTotalResolver
		}
	});
}

/* @ngInject */
function ItemListResolver(itemListService) {
	return itemListService.loadFirstItems();
}

function ItemListTotalResolver(itemListService) {
	return itemListService.getTotalItems();
}

/* @ngInject */
function ItemListRouteController(items, totalItems, itemListService, ngDialog) {
	var vm = this, page = 0, numberItems = totalItems;

	vm.items = items;
	vm.favoriteItems = [];
	vm.loadMorePagesAvailable = true;

	vm.loadMore = loadMoreItems;
	vm.toggleFavorite = toggleFavorite;
	vm.openFavoriteList = openFavoriteList;

	///////


	/////// PUBLIC FUNCTIONS

	function loadMoreItems() {
		page += 1;
		itemListService.loadMoreItems(page)
			.then(loadMoreSuccess);
	}

	function toggleFavorite(item) {
		var index;
		if ( !item.isFavorite ) {
			item.isFavorite = true;
			vm.favoriteItems.push(item);
		} else {
			index = vm.favoriteItems.indexOf(item);
			item.isFavorite = false;
			if ( index > -1 ) {
				vm.favoriteItems.splice(index, 1);
			}
		}
	}

	function openFavoriteList() {
		ngDialog.open({
			template: 'src/item-list/favorite-list/FavoriteList.tpl.html',
			data:{
				favoriteList: vm.favoriteItems
			}
		});
	}



	/////// PRIVATE FUNCTIONS

	function loadMoreSuccess( response ) {
		vm.items.push.apply(vm.items, response);

		if ( vm.items.length >= numberItems ) {
			vm.loadMorePagesAvailable = false;
		}
	}
	
}
