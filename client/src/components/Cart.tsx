import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../service/cart.service";
import { CartItem, Products } from "../interface/product";

export default function Cart() {
  const cartState = useSelector((state: any) => state.carts.cart);
  console.log(cartState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {cartState.map((product: CartItem) => (
        <div className="cart" key={product.productId}>
          <div className="image">
            <img src={product.img} alt={product.nameProduct} />
          </div>
          <div className="infor">
            <h3>{product.nameProduct}</h3>
            <input type="number" value={product.quantity} />
            <p>Quantity: {product.quantity}</p>
          </div>
          <div className="price">
            <h3>{product.price} VNĐ</h3>
            <button>Update</button>
            <a href="">Remove</a>
          </div>
        </div>
      ))}
    </>
  );
}
