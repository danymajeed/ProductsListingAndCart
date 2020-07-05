import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItemFromCart } from "../../actions/CartActions";

class DeleteItemFromCart extends Component {
  render() {
    const { id, deleteItem } = this.props;
    return (
      <button className={this.props.styling} onClick={() => deleteItem(id)}>
        {this.props.content}
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteItemFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteItemFromCart);
