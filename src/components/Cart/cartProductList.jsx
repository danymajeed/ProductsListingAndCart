import React, { Component } from "react";
import CartProduct from "./cartProduct";
import CartSummary from "./cartSummary";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    const { products, total, itemsCount } = this.props;
    if (itemsCount !== 0) {
      return (
        <div>
          <div className="text-center my-4 page-header">
            <h4>{itemsCount} Item(s) In Cart</h4>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4  mb-4">
                <CartSummary total={total}></CartSummary>
              </div>

              <div className="col-md-8">
                {products.map((p) => {
                  return (
                    <div className="mb-3" key={p.id}>
                      <CartProduct product={p} />;
                    </div>
                  );
                })}
              </div>
            </div>
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
