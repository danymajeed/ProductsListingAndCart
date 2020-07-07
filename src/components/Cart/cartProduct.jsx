import React from "react";
import AddToCart from "./addToCart";
import RemoveFromCart from "./removeFromCart";
import DeleteItemFromCart from "./deleteItemFromCart";

const CartProduct = ({ product }) => {
  return (
    <div className="card card-body">
      <div className="d-flex flex-column align-items-center flex-sm-row justify-content-between">
        <h5 className="pb-3 ">{product.name}</h5>
        <div className="input-group " style={{ width: 150 }}>
          <div className="input-group-prepend">
            <RemoveFromCart
              content="-"
              styling=" btn btn-outline-danger"
              id={product.id}
            ></RemoveFromCart>
          </div>
          <input
            readOnly
            className="text-center form-control  "
            type="text"
            value={product.quantity}
          ></input>
          <div className="input-group-append">
            <AddToCart
              content="+"
              styling=" btn btn-outline-success"
              product={product}
            ></AddToCart>
          </div>
        </div>
      </div>

      <h6 className="card-text pt-2 d-flex justify-content-center justify-content-sm-start my-3">
        Rs. {product.price} x {product.quantity}
      </h6>
      <div className="d-flex justify-content-between">
        <h6 className="card-text align-self-center">
          Subtotal: {product.price * product.quantity}
        </h6>

        <DeleteItemFromCart
          id={product.id}
          content="Remove"
          styling="  btn btn-danger"
        ></DeleteItemFromCart>
      </div>
    </div>
  );
};

export default CartProduct;
