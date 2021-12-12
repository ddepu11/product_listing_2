import { ADD_TO_CART } from "../actions/cartActions";
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
            quantity: 0,
          },
        ],
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
