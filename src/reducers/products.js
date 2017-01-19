// Redux reducer for Products
// Note: A React Reducer takes old state and action and returns new state
import {REQUEST_PRODUCTS, RECEIVE_PRODUCTS} from '../actions/index';

const ProductsReducer = function(state = {isFetching: false, products: []}
, action) {
	switch(action.type) {
		case REQUEST_PRODUCTS:
			return Object.assign({}, state, {isFetching: true});
		case RECEIVE_PRODUCTS:
			return Object.assign({}, state, {isFetching: false, products: action.products});
		default:
			return state;
	}
}

export default ProductsReducer;