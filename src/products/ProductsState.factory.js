// ProductsState.factory.js
/*
	ProductsState:
		-    

*/
'use strict';

module.exports = ProductsStateFactory;

/* @ngInject */
function ProductsStateFactory(Product) {
	var state = {
		list: [],
		map: {},
		deserializeAll: deserializeAll
	};
	return state;

	//////

	function deserializeAll(serializedProducts) {
		serializedProducts.forEach(function(serializedProduct) {

			// it follows identity map pattern, same id same instance
			var product = state.map[serializedProduct.id];
			if (!product) {
				product = new Product();
				state.list.push(product);
				state.map[serializedProduct.id] = product;
			}

			product.deserialize(serializedProduct);
		});
	}
}