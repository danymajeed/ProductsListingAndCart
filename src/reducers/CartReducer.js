import { ADD_TO_CART } from "../actionsConstants";
import { REMOVE_FROM_CART } from "../actionsConstants";
import { DELETE_ITEM_FROM_CART } from "../actionsConstants";
import produce from "immer";

const initialCartState = {
  itemsInCart: [],
  itemsCount: 0,
  total: 0,
};

const Cart = (state = initialCartState, action) =>
  produce(state, (draft) => {
    let index = -1;
    if (action.type === ADD_TO_CART) {
      const index = draft.itemsInCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1)
        draft.itemsInCart[index].quantity =
          draft.itemsInCart[index].quantity + 1;
      else {
        draft.itemsInCart.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1,
        });
      }
      draft.total += action.payload.price;
      draft.itemsCount = draft.itemsCount + 1;
    } else if (action.type === REMOVE_FROM_CART) {
      index = draft.itemsInCart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (draft.itemsInCart[index].quantity === 1) {
          draft.total -= draft.itemsInCart[index].price;
          draft.itemsInCart.splice(index, 1);
        } else {
          draft.itemsInCart[index].quantity =
            draft.itemsInCart[index].quantity - 1;
          draft.total -= draft.itemsInCart[index].price;
        }
        draft.itemsCount--;
      }
    } else if (action.type === DELETE_ITEM_FROM_CART) {
      index = draft.itemsInCart.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        draft.total -=
          draft.itemsInCart[index].price * draft.itemsInCart[index].quantity;
        draft.itemsCount -= draft.itemsInCart[index].quantity;
        draft.itemsInCart.splice(index, 1);
      }
    }
  });

export default Cart;
