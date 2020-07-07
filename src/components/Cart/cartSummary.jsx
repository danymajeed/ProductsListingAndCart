import React from "react";

const CartSummary = ({ total }) => {
  return (
    <div className="card text-center p-3">
      <h5>Total: Rs. {total}</h5>
    </div>
  );
};

export default CartSummary;
