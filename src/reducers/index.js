import { combineReducers } from 'redux';
import products from './products';

// NOTE: we only have one reducer at the moment, but that will change sson
const productAppReducer = combineReducers({
  products
});

export default productAppReducer;