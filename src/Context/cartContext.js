import { createContext, useReducer } from "react";
import { ADD_TO_CART } from "../actions/cartActions";
import cartReducer from "./../reducers/cartReducer";

const initialState = {
  cartItems: [],
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

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
