import { useContext, useEffect } from "react";
import styled from "styled-components";
import { CartContext } from "../../Context/cartContext";
import { Link } from "react-router-dom";
import CartItem from "../../Components/CartItem";

const Cart = () => {
  const { cartItems, calculateTotal, total } = useContext(CartContext);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  return (
    <Wrapper>
      <div className="header flex">
        <h3>My Cart ({total.items}) </h3>
        <Link to="/">Go to Home</Link>
      </div>

      <div className="hero flex">
        <div className="cart_items">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem {...item} key={item.id} />)
          ) : (
            <div className="empty_cart">
              <h2>Your cart is empty</h2>
              <Link to="/">Shop Now</Link>
            </div>
          )}
        </div>

        <div className="total">
          <div className="row">
            <h3>Price Details</h3>
          </div>

          <div className="row flex">
            <h2>Price ({total.items})</h2>
            <span>{total.price}&nbsp;₹</span>
          </div>
          <div className="row flex">
            <h2>Discount</h2>
            <span>{total.discount}&nbsp;₹</span>
          </div>

          <hr />
          <div className="row flex">
            <h2>Total</h2>
            <span>{total.price - total.discount}&nbsp;₹</span>
          </div>

          <div className="row">
            <h3>You will save {total.discount}&nbsp;₹ on this order</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20px 0px;

  .hero {
    justify-content: space-between;
    align-items: flex-start;

    .empty_cart {
      margin-top: 20px;
      margin-left: 20px;

      h2 {
        font-size: 1.5em;
        font-weight: 400;
      }

      a {
        margin-top: 10px;
      }
    }
  }

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

  .cart_items {
    width: 65%;
  }

  .total {
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    width: 30%;
    padding: 10px 5px;

    /* border: 1px solid red; */
    position: sticky;
    top: 10px;

    .row {
      justify-content: space-between;
      margin: 0 0 18px 0;

      h2,
      h3 {
        font-size: 1.1em;
        margin-left: 10px;
        font-weight: 400;
      }

      h3 {
        font-size: 1em;
      }
    }
  }
`;

export default Cart;
