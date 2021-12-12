import { createContext, useReducer } from "react";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_SAVED_FOR_LATER,
  SAVE_ITEM_FOR_LATER,
} from "../actions/cartActions";
import cartReducer from "./../reducers/cartReducer";

const initialState = {
  cartItems: [],
  total: {
    items: 0,
    price: 0,
    discount: 0,
  },

  savedItems: [],
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (e) => {
    const productId = e.target.dataset.id;

    const doesItemAlreadyExists = state.cartItems.filter(
      (item) => item.id === productId
    );

    doesItemAlreadyExists.length === 0 &&
      dispatch({ type: ADD_TO_CART, payload: productId });
  };

  const increaseQuantity = (e) => {
    const productId = e.target.dataset.id;

    const item = state.cartItems.filter((item) => item.id === productId)[0];

    if (item.quantity < 10) {
      dispatch({ type: INCREASE_QUANTITY, payload: productId });
    }
  };

  const decreaseQuantity = (e) => {
    const productId = e.target.dataset.id;

    const item = state.cartItems.filter((item) => item.id === productId)[0];

    if (item.quantity <= 1) {
      dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });
    }

    if (item.quantity > 0) {
      dispatch({ type: DECREASE_QUANTITY, payload: productId });
    }
  };

  const calculateTotal = () => {
    dispatch({ type: CALCULATE_TOTAL });
  };

  const removeProduct = (e) => {
    const productId = e.target.dataset.id;

    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });
  };

  const saveItemForLater = (e) => {
    const productId = e.target.dataset.id;
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: productId });

    dispatch({ type: SAVE_ITEM_FOR_LATER, payload: productId });
  };

  const removeFromSaved = (e) => {
    const productId = e.target.dataset.id;

    const doesItemAlreadyExists = state.cartItems.filter(
      (item) => item.id === productId
    );

    doesItemAlreadyExists.length === 0 &&
      dispatch({ type: ADD_TO_CART, payload: productId });

    dispatch({ type: REMOVE_ITEM_FROM_SAVED_FOR_LATER, payload: productId });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        calculateTotal,
        removeProduct,
        saveItemForLater,
        removeFromSaved,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
