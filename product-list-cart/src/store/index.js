import { configureStore } from "@reduxjs/toolkit";
import prodCartReducer from "./reducers/prodCartReducer";

const rootReducer = {
    prodCart : prodCartReducer,
}

export const ourStore = configureStore({
    reducer : rootReducer
})