import React, { Component } from "react";
import { connect } from "react-redux";
import setSearchField from "../actions/setSearchFieldAction";

class SearchField extends Component {
  render() {
    const { value, onSearchChange } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <input
          className="p-3 m-3"
          name="searchInput"
          type="search"
          placeholder="Enter Product Name"
          onChange={onSearchChange}
          value={value}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.search.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
