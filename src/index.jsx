import ReactDOM from "react-dom";
import App from "./Components/App";
import { CartProvider } from "./Context/cartContext";
import "./index.css";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
