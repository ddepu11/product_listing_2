import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  CALCULATE_TOTAL,
} from "../actions/cartActions";
import productsData from "../data/products.json";

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...productsData.products.filter(
              (item) => item.id === action.payload
            )[0],
            quantity: 1,
          },
        ],
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.id === action.payload) {
              item.quantity++;
              return item;
            } else {
              return item;
            }
          }),
        ],
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.map((item) => {
            if (item.id === action.payload) {
              item.quantity--;
              return item;
            } else {
              return item;
            }
          }),
        ],
      };

    case CALCULATE_TOTAL:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
