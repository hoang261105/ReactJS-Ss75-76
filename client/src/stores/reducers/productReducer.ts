import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Products } from "../../interface/product";
import { decreaseQuantity, getAllProduct } from "../../service/product.service";

const productState: Products[] = [];

const productReducer = createSlice({
    name: "product",
    initialState: {
        product: productState,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProduct.pending, (state, action) => {

        })
        .addCase(getAllProduct.fulfilled, (state: any, action) => {
            state.product = action.payload;
        })
        .addCase(decreaseQuantity.fulfilled, (state: any, action) => {
            return state.product.map((product: Products) => product.id === action.payload.id ? {...product, quantity: product.quantity - action.payload.quantity} : product)
        })
    }
})

export default productReducer.reducer