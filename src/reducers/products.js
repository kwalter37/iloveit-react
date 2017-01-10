// Redux reducer for Products
// Note: A React Reducer takes old state and action and returns new state
import {REQUEST_PRODUCTS, RECEIVE_PRODUCTS} from '../actions/index';

const ProductsReducer = function(state = []
, action) {
	switch(action.type) {
		case REQUEST_PRODUCTS:
			return state; //we will add an isFetching state here later
		case RECEIVE_PRODUCTS:
			//var testReduce = Object.assign({}, state, {products: action.products});
			return action.products;
		default:
			return state;
	}
}

export default ProductsReducer;