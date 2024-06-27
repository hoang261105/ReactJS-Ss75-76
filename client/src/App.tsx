import Cart from "./components/Cart";
import ListProduct from "./components/ListProduct";
import "./scss/shoppingCart.scss";

export default function App() {
  return (
    <div className="container">
      <div className="left-container">
        <h2>List Product</h2>
        <div className="products">
          <ListProduct />
        </div>
      </div>
      <div className="right-container">
        <h2>Cart</h2>
        <div className="list-product">
          <Cart />
        </div>
        <div className="underline"></div>
        <div className="total">
          <h3>Subtotal</h3>
          <h3>20000 VNĐ</h3>
        </div>
      </div>
    </div>
  );
}
