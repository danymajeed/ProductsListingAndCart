import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/CartActions";

class AddToCart extends Component {
  render() {
    const { product, add } = this.props;
    return (
      <button className={this.props.styling} onClick={() => add(product)}>
        {this.props.content}
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (p) => dispatch(addToCart(p)),
  };
};

export default connect(null, mapDispatchToProps)(AddToCart);
