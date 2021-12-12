import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../Components/CartItem";
import { CartContext } from "../Context/cartContext";

const SaveForLater = () => {
  const { savedItems } = useContext(CartContext);

  console.log(savedItems);

  return (
    <Wrapper>
      <h2>Products saved for later</h2>
      <Link to="/cart">Cart</Link>

      <div className="saved-items">
        {savedItems.length > 0 ? (
          savedItems.map((item) => (
            <CartItem {...item} key={item.id} fromSavedItems={true} />
          ))
        ) : (
          <div className="empty_saved_items">
            <h2>You have not saved any product for later</h2>
            <Link to="/cart">Go back to cart</Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;

  .saved-items {
    margin-top: 20px;
  }
  .empty_saved_items {
    margin-top: 40px;
  }
`;

export default SaveForLater;
