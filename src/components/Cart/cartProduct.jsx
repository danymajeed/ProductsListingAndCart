import React from "react";
import AddToCart from "./addToCart";
import RemoveFromCart from "./removeFromCart";
import DeleteItemFromCart from "./deleteItemFromCart";

const CartProduct = ({ product }) => {
  return (
    <div className="card my-3">
      <div className="card-body">
        <div className="row">
          <h5 className="col-sm-10 ">{product.name}</h5>

          <RemoveFromCart
            content="-"
            styling="quantity-left-minus btn btn-danger"
            id={product.id}
          ></RemoveFromCart>
          <input
            readOnly
            className="text-center form-control col-sm-1 mx-2"
            type="text"
            value={product.quantity}
          ></input>
          <AddToCart
            content="+"
            styling="quantity-left-minus btn btn-success"
            product={product}
          ></AddToCart>
        </div>
        <h6 className="card-text mt-2">
          Rs. {product.price} x {product.quantity}
        </h6>
        <div className="row">
          <h6 className="card-text col-sm-10 mt-3">
            Subtotal: {product.price * product.quantity}
          </h6>

          <DeleteItemFromCart
            id={product.id}
            content="Remove"
            styling=" col-sm-2 btn btn-danger"
          ></DeleteItemFromCart>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
