import axios from "axios";
import { CartItem, Products } from "../interface/product";
import { createAsyncThunk } from "@reduxjs/toolkit";

// API lấy dữ liệu
export const getProducts: any = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await axios.get("http://localhost:9000/carts");
        return response.data;
    }
);

// API thêm sản phẩm vào giỏ hàng
export const addCart: any = createAsyncThunk(
    "cart/addCart",
    async (cart: CartItem) => {
        const response = await axios.get("http://localhost:9000/carts");
        const cartItem = response.data
        console.log(cartItem)

        const existingItem = cartItem.find((item: any) => item.productId === cart.productId);
        if(existingItem){
            const updatedProduct = {
                ...existingItem,
                quantity: existingItem.quantity + cart.quantity
            }
            const responseUpdate = await axios.put(`http://localhost:9000/carts/${existingItem.id}`, updatedProduct);
            return responseUpdate.data;
        }else{
            const responseAdd = await axios.post("http://localhost:9000/carts", { ...cart, productId: cart.productId });
            return responseAdd.data;
        }
    }
);
