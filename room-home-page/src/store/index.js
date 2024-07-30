import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer";

const rootReducer = {
    products: productReducer
}

export const ourStore = configureStore({
    reducer: rootReducer
})