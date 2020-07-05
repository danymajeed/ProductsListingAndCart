import React from "react";
import ProductList from "./Products/productList";
import SearchField from "./searchField";

const Home = () => {
  return (
    <div>
      <SearchField></SearchField>
      <ProductList></ProductList>
    </div>
  );
};

export default Home;
