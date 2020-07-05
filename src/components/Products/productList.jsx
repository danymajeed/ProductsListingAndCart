import React, { Component } from "react";
import { connect } from "react-redux";
import ProductCard from "./productCard";
import requestProducts from "../../actions/requestProductsAction";

class ProductList extends Component {
  componentDidMount() {
    this.props.requestProducts();
  }

  render() {
    const { searchField, products, isPending, error } = this.props;

    if (isPending) {
      return (
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    } else if (error !== "") {
      return (
        <div className="text-center ">
          <h3>An Error Ouccured Whlile Fetching Data</h3>;
        </div>
      );
    } else {
      const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchField.toLowerCase());
      });
      return (
        <div>
          {filteredProducts.map((p) => {
            return <ProductCard product={p} key={p.id} />;
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    products: state.items.products,
    isPending: state.items.isPending,
    error: state.items.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestProducts: () => dispatch(requestProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
