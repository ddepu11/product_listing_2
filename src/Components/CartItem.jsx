import styled from "styled-components";

const CartItem = ({
  title,
  price,
  size,
  soldBy,
  brand,
  idealFor,
  image,
  id,
}) => {
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
        <h2>Size: {size}</h2>
        <h2>Sold by: {soldBy}</h2>

        <h2 className="ideal_for">
          Ideal for:{" "}
          {idealFor.map((item) => (
            <span key={item}>{item}&nbsp;&nbsp;</span>
          ))}
        </h2>
      </div>

      <div className="right"></div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  margin: 0px 0 25px 0;
  justify-content: flex-start;

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
    margin-left: 40px;
    flex-direction: column;
    align-items: flex-start;
    /* border: 1px solid red; */

    h2 {
      font-weight: 400;
      font-size: 1.2em;
      margin-bottom: 4px;
    }
  }
`;

export default CartItem;
