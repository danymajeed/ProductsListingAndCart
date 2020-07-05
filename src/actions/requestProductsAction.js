import {
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS,
  REQUEST_PRODUCTS_FAILED,
} from "../actionsConstants";

const requestProducts = () => (dispatch) => {
  dispatch({ type: REQUEST_PRODUCTS_PENDING });
  fetch("https://my-json-server.typicode.com/danymajeed/demoproducts/Products")
    .then((response) => response.json())
    .then((data) => dispatch({ type: REQUEST_PRODUCTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_PRODUCTS_FAILED, payload: error })
    );
};

export default requestProducts;
