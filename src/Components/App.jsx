import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../Screen/Cart/Cart";
import Home from "../Screen/Home/Home";
import SaveForLater from "./../Screen/SaveForLater";

const App = () => {
  return (
    <Wrapper className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/save-for-later" element={<SaveForLater />} />
        </Routes>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
`;

export default App;
