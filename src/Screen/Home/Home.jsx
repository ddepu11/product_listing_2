import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "../../Components/Product";
import productsData from "../../data/products.json";

const Home = () => {
  return (
    <Wrapper>
      <div className="header flex">
        <h2>All the products</h2>

        <Link to="/cart">Cart</Link>
      </div>
      <div className="flex products">
        {productsData &&
          productsData.products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 20px 0px;

  .header {
    justify-content: flex-start;
    margin-left: 70px;

    h2 {
      font-size: 1.1em;
    }

    a {
      margin-left: 40px;
    }
  }

  .products {
    flex-wrap: wrap;
    gap: 10px 15px;
    margin: 20px 0 0 0;
  }
`;

export default Home;
