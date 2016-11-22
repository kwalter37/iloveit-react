import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>{decodeURIComponent(this.props.product.name)}</td>
        <td>{decodeURIComponent(this.props.product.brand)}</td>
        <td>{decodeURIComponent(this.props.product.category)}</td>
        <td>{decodeURIComponent(this.props.product.rating)}</td>
      </tr>
      );
  }
}

export default ProductRow;