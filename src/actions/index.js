// Redux Action Creators
import fetch from 'isomorphic-fetch';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';


function requestProducts() {
	// later, will add filter
	return {
		type: REQUEST_PRODUCTS
	};
}

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

function recieveProducts(json) {
	// 
	return {
		type: RECEIVE_PRODUCTS,
		products: json
	};
}

// a thunk action creator - returns a function
export function fetchProducts() {
	return function(dispatch) {
		//indicate that we are starting a fetch
		dispatch(requestProducts());

		//return promise, repond by sending recievePost action
		return fetch('https://iloveit.herokuapp.com/products')
			.then(response => response.json())
			.then(json => dispatch(recieveProducts(json)));
	};

}