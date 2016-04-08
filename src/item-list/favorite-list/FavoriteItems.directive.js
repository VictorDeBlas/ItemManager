'use strict';

module.exports = FavoriteListDirective;

/* @ngInject */
function FavoriteListDirective() {
	var directive = {
		restrict: 'E',
		template: require('./FavoriteItemsContent.tpl.html'),
		controller: FavoriteListController,
		controllerAs: 'vm',
		bindToController: {
			favoriteItems: '='
		},
	};
	return directive;
}

/* @ngInject */
function FavoriteListController($scope) {
	var vm = this;

	vm.deleteFromFavorites = deleteFromFavorites;


	/////// PUBLIC FUNCTIONS

	function deleteFromFavorites(item) {
		var itemIndex;

		item.isFavorite = false;
		itemIndex = vm.favoriteItems.indexOf(item);

		if ( itemIndex > -1 ) {
			vm.favoriteItems.splice(itemIndex, 1);
		}

		if ( vm.favoriteItems.length < 1 ) {
			$scope.closeThisDialog(null);
		}
	}
}

