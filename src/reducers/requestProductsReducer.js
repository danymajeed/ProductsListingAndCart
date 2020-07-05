import {
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,
} from "../actionsConstants";

const initialProductsState = {
  products: [],
  isPending: "",
  error: "",
};

const Products = (state = initialProductsState, action = {}) => {
  if (action.type === REQUEST_PRODUCTS_PENDING)
    return { ...state, isPending: true };
  else if (action.type === REQUEST_PRODUCTS_SUCCESS)
    return { ...state, isPending: false, products: action.payload };
  else if (action.type === REQUEST_PRODUCTS_FAILED) {
    return {
      ...state,
      isPending: false,
      error: "error",
    };
  } else return state;
};

export default Products;
