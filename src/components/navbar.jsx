import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { itemsCount } = this.props;
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Store</span>
        <div>
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <span className="badge badge-secondary badge-pill badge-sm">
          {itemsCount !== 0 ? itemsCount : null}
        </span>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemsCount: state.cart.itemsCount,
  };
};
export default connect(mapStateToProps, null)(Navbar);
