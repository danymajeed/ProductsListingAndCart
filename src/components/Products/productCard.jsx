import React from "react";
import AddToCart from "../Cart/addToCart";

const ProductCard = ({ product }) => {
  return (
    <div className="card mb-3">
      <h5 className="card-header">{product.name}</h5>
      <div className="card-body">
        <h5 className="card-title">Rs. {product.price}</h5>
        <p className="card-text">{product.content}</p>
        <AddToCart
          content="Add to Cart"
          styling="btn btn-primary"
          product={product}
        ></AddToCart>
      </div>
    </div>
  );
};

export default ProductCard;
