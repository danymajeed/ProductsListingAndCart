import { ADD_TO_CART } from "../actionsConstants";
import { REMOVE_FROM_CART } from "../actionsConstants";
import { DELETE_ITEM_FROM_CART } from "../actionsConstants";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const deleteItemFromCart = (id) => {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: id,
  };
};
