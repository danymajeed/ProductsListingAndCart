import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/CartActions";

class RemoveFromCart extends Component {
  render() {
    const { id, remove } = this.props;
    return (
      <button className={this.props.styling} onClick={() => remove(id)}>
        {this.props.content}
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveFromCart);
