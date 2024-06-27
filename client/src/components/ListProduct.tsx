import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, getAllProduct } from "../service/product.service";
import { Products } from "../interface/product";
import { addCart, getProducts } from "../service/cart.service";

export default function ListProduct() {
  const productState = useSelector((state: any) => state.products.product);
  // Khởi tạo một đối tượng trạng thái để theo dõi số lượng đầu vào cho sản phẩm
  const [inputQuantities, setInputQuantities] = useState<{
    [key: number]: number;
  }>({});
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const handleAdd = (product: Products) => {
    const quantity = inputQuantities[product.id] || 1;
    dispatch(
      addCart({
        productId: product.id,
        nameProduct: product.nameProduct,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity,
      })
    );
  };

  const handleChange = (productId: number, quantity: number) => {
    setInputQuantities({
      ...inputQuantities,
      [productId]: quantity,
    });
  };

  return (
    <>
      {productState.map((product: Products) => (
        <div className="product">
          <div className="image">
            <img src={product.img} alt="" />
          </div>
          <div className="information">
            <h3>{product.nameProduct}</h3>
            <p>{product.description}</p>
            <p>
              <b>Total: </b> {product.quantity}
            </p>
          </div>
          <div className="price-quantity">
            <div className="quantity">
              <input
                type="number"
                value={inputQuantities[product.id] || 1}
                onChange={(e) =>
                  handleChange(product.id, parseInt(e.target.value))
                }
              />
            </div>
            <div className="price">
              <p>
                <b>Price:</b> {product.price} VNĐ
              </p>
            </div>
            <div className="addCart">
              <button
                onClick={() => handleAdd(product)}
                disabled={product.quantity <= 0}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
