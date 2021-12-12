import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../../Components/CartItem";

const Cart = () => {
  const { cartItems, calculateTotal } = useContext(CartContext);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <Wrapper>
      <div className="header flex">
        <h3>{cartItems.length} items in the cart</h3>

        <Link to="/">Go to Home</Link>
      </div>

      <div className="cart_items ">
        {cartItems.length > 0 &&
          cartItems.map((item) => <CartItem {...item} key={item.id} />)}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20px 0px;

  .header {
    margin-left: 20px;
    margin-bottom: 30px;

    justify-content: flex-start;

    h3 {
      font-size: 1.1em;
      margin-left: 10px;
      font-weight: 400;
    }

    a {
      margin-left: 40px;
    }
  }
`;

export default Cart;
