import React, { Component } from 'react';
import { connect } from 'react-redux'
//import $ from 'jquery';
import { fetchProducts } from '../actions/index';
import configureStore from '../configureStore';
import './App.css';
import ProductList from './ProductList';

// for now, we hard-code data
//var PRODUCTS = [{"_id":"5802576ac45c4900034f5be9","name":"Extra%20Virgin%20Olive%20Oil","comments":"","rating":4,"category":"Olive Oil","brand":"California%20Olive%20Ranch","createDate":"2016-10-15T16:20:58.961Z"},{"_id":"57e5cf510f1e4f0003a5f8ca","name":"Chunky%20Chicken","brand":"Campbell's","comments":"A wee bit salty","category":"Soup","rating":2},{"_id":"57e5d1d30f1e4f0003a5f8cb","name":"Mango%20Orange%20Mo","brand":"Hawaiian%20Sun","comments":"","category":"Beverage","rating":4},{"_id":"5812c16778bdc9000363f126","name":"Dark%20Chocolate%20with%20sea%20salt","comments":"","rating":0,"category":"Bars","brand":"Kind","createDate":"2016-10-28T03:09:27.223Z"},{"_id":"57e43aa7571871000357c9ab","brand":"Kind","name":"Maple glaze pecan and sea salt","category":"Bars","rating":5},{"_id":"57b63717025ebc0003a5f42b","brand":"Mezetta","name":"Parmesan, Asiago, and Romano","category":"Pasta Sauce","rating":4},{"_id":"57eaf53e795dae0003e723cc","comments":"Phyllis bought at Costco Kahalui","brand":"Milton's","name":"Gluten%20Free%20Multigrain","category":"Chips","rating":4},{"_id":"57e9eb3d2970c80003eb5558","comments":"","brand":"Milton's","name":"Gluten%20Free%20with%20Sea%20Salt","category":"Crackers","rating":4,"createDate":"2016-09-27T03:45:01.391Z"},{"_id":"57e31cab8d15810003149b9e","brand":"Pasta Works","name":"4 cheese tortellini","category":"Pasta","rating":2,"createDate":"2016-09-21T23:50:03.271Z"},{"_id":"57abc23f452cfc00031afc2e","brand":"Ragu","name":"Chunky Tomato and Garlic","category":"Pasta Sauce","rating":5},{"_id":"57e1aabd7c58fa0003d69268","brand":"Raos","name":"Spicy Pesto","category":"Pasta Sauce","rating":2},{"_id":"57b637f2025ebc0003a5f42c","name":"Mushroom%20Marinara","brand":"Trader%20Joe's","comments":"Too spicy\n","category":"Pasta Sauce","rating":1},{"_id":"57e3354d8d15810003149b9f","brand":"Triscuit","name":"Original","category":"Crackers","rating":2,"createDate":"2016-09-22T01:35:09.480Z"},{"_id":"57e43b5c571871000357c9ac","name":"Original%20With%20Sea%20Salt","brand":"Triscuit","category":"Crackers","rating":4},{"_id":"57eaf436795dae0003e723cb","comments":"Very plain","brand":"Way%20Better","name":"Multi%20Grain%20Chips","category":"Chips","rating":1},{"_id":"57eaf3f9795dae0003e723ca","comments":"","brand":"Way%20Better","name":"Sweet%20Potato%20Whole%20Grain%20Tortilla%20Chips","category":"Chips","rating":4,"createDate":"2016-09-27T22:34:33.518Z"}];
//var PRODUCTS = [{"_id":"0","name":"Loading...","comments":"","rating":0,"category":"","brand":"","createDate":"2016-10-15T16:20:58.961Z"}];
const store = configureStore();

class App extends Component {

  constructor() {
    super();
    //this.state = {products: PRODUCTS};
  }

/* version using ajax directly
  componentWillMount() {
    $.ajax({
      url: "https://iloveit.herokuapp.com/products"
    }).then((result) => {
      this.setState({products: result});
    }, function(reason) {
      console.log("drats:");
      console.log(reason);
    }
    );
  }
  */
  componentWillMount() {
    store.dispatch(fetchProducts());
  }

  render() {
    
    return (
      <div className="App">
        <h1>Product List</h1>
        <ProductList className="Filtered-product-table" products={this.props.products} >
        </ProductList>
      </div>
    );
  }
}

// used with custom connect
function mapStateToProps(state) {
  return {
    products: state.products
  }
}

// custom connect
function connectWithStore(store, WrappedComponent, ...args) {
  var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />
  }
}

export default connectWithStore(store, App, mapStateToProps);
