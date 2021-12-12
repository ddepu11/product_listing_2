import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

const Product = ({
  title,
  price,
  size,
  soldBy,
  brand,
  idealFor,
  image,
  id,
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Wrapper>
      <div className="image">
        <img src={image} />

        <button className="cart_btn" data-id={id} onClick={addToCart}>
          Add to Cart
        </button>
      </div>

      <div className="info">
        <h2 className="title">{title}</h2>

        <h3 className="price">Price: {price}</h3>
        <h4 className="size">Size: {size}</h4>

        <h4 className="sold_by">Sold By: {soldBy}</h4>
        <h4 className="brand">Brand: {brand}</h4>

        <h4 className="ideal_for">
          Ideal for:{" "}
          {idealFor.map((item) => (
            <span key={item}>{item}&nbsp;&nbsp;</span>
          ))}
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .image {
    width: 200px;
    height: 300px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .cart_btn {
      position: absolute;
      right: 4px;
      bottom: 5px;
      padding: 5px 10px;
      border-radius: 5px;

      background-color: #191919;
      color: white;
    }
  }

  .title,
  .brand,
  .size,
  .sold_by,
  .ideal_for,
  .price {
    font-size: 1em;
    font-weight: 300;
  }
`;

export default Product;
