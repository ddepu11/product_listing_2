import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../Context/cartContext";

const CartItem = ({
  title,
  price,
  size,
  soldBy,
  brand,
  idealFor,
  image,
  id,
  quantity,
  discount,
}) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  return (
    <Wrapper className="flex">
      <div className="left">
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </div>

      <div className="middle flex">
        <h2>{title}</h2>
        <h2>Brand: {brand}</h2>
        <h2>Price: {price} Rs</h2>
        <h2>Discount: {discount} Rs</h2>
        <h2>Size: {size}</h2>
        <h2>Sold by: {soldBy}</h2>

        <h2 className="ideal_for">
          Ideal for:{" "}
          {idealFor.map((item) => (
            <span key={item}>{item}&nbsp;&nbsp;</span>
          ))}
        </h2>
      </div>

      <div className="right flex">
        <div className="btns flex">
          <button onClick={increaseQuantity} data-id={id}>
            +
          </button>

          <span>{quantity}</span>

          <button onClick={decreaseQuantity} data-id={id}>
            -
          </button>
        </div>

        <button>Remove </button>
        <button>Save for later </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 0px 0 20px 0;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px 10px;

  .left {
    .image {
      width: 200px;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }

  .middle {
    flex-direction: column;
    align-items: flex-start;
    /* border: 1px solid red; */

    h2 {
      font-weight: 400;
      font-size: 1.2em;
      margin-bottom: 4px;
    }
  }

  .right {
    .btns {
      margin-bottom: 20px;

      button {
        font-size: 1.2em;
        padding: 0px 8px;
        border-radius: 5px;
      }

      span {
        margin: 0 10px;
      }
    }

    flex-direction: column;

    button {
      font-size: 1em;
      padding: 0px 8px;
      border-radius: 2px;
      margin-top: 10px;
    }
  }
`;

export default CartItem;
