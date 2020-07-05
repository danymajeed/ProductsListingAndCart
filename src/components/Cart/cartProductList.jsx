import React, { Component } from "react";
import CartProduct from "./cartProduct";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    const { products, total, itemsCount } = this.props;
    if (itemsCount !== 0) {
      return (
        <div>
          <div className="text-center my-4">
            <h4>{itemsCount} Item(s) In Cart</h4>
          </div>
          {products.map((p) => {
            return <CartProduct key={p.id} product={p} />;
          })}
          <div className="card text-center p-3">
            <h4>Total: Rs. {total}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div className="text-center my-4">
          <h4>Cart is Empty</h4>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.cart.itemsInCart,
    total: state.cart.total,
    itemsCount: state.cart.itemsCount,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
