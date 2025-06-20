import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import categoryReducer from "./features/categorySlice.js";
import productReducer from "./features/productSlice.js";
import bidReducer from "./features/biddingSlice.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        product: productReducer,
        bidding: bidReducer,

    }
})