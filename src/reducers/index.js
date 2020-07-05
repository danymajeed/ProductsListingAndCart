import { combineReducers } from "redux";
import Products from "./requestProductsReducer";
import searchField from "./setSearchFieldReducer";
import Cart from "./CartReducer";

const rootReducer = combineReducers({
  items: Products,
  search: searchField,
  cart: Cart,
});

export default rootReducer;
