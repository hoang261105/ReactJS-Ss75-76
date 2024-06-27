import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../interface/product";

// API lấy danh sách sản phẩm
export const getAllProduct: any = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    const response = await axios.get("http://localhost:9000/products")
    return response.data
  }
)

// API thêm sản phẩm vào giỏ hàng
export const decreaseQuantity: any = createAsyncThunk(
  "product/addProductToCart",
  async (product: Products) => {
    const response = await axios.post("http://localhost:9000/products", product);
    return response.data
  }
)
