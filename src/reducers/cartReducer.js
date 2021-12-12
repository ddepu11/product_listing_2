import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  CALCULATE_TOTAL,
  REMOVE_ITEM_FROM_CART,
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
      // console.log(
      //   state.cartItems.reduce(
      //     (total, item) => {
      //       return {
      //         price: total.price + item.quantity * item.price,
      //         items: total.items + item.quantity,
      //       };
      //     },
      //     {
      //       price: 0,
      //       items: 0,
      //     }
      //   )
      // );

      return {
        ...state,
        total: state.cartItems.reduce(
          (total, item) => {
            return {
              price: total.price + item.quantity * item.price,
              items: total.items + item.quantity,
              discount: total.discount + item.quantity * item.discount,
            };
          },
          {
            price: 0,
            items: 0,
            discount: 0,
          }
        ),
      };

    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return { ...state };
  }
};

export default cartReducer;
