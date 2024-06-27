import { createSlice } from "@reduxjs/toolkit";
import { CartItem, Products } from "../../interface/product";
import { addCart, getProducts } from "../../service/cart.service";

const cartState: CartItem[] = [];

const cartReducer = createSlice({
    name: "cart",
    initialState: {
        cart: cartState,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.cart = action.payload
        })
        .addCase(addCart.fulfilled, (state, action) => {
            const productIndex = state.cart.findIndex((cart: CartItem) => cart.productId == action.payload.productId);
            console.log(productIndex, action.payload);
            
            if(productIndex !== -1){
                state.cart[productIndex].quantity = action.payload.quantity;
            }else{
                state.cart.push(action.payload);
            }
        })
    }
})

export default cartReducer.reducer