import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    const rows = this.props.products.map((product) => {
      return (
        <ProductRow key={product._id} product={product}/>
      )
    })
    return (
      <table className="Filtered-product-name table table-striped table-bordered">
        <thead>
          <tr key="header">
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Rating</th>
          </tr></thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}



export default ProductTable;