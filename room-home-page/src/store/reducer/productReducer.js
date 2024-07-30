import { createSlice } from "@reduxjs/toolkit";

const productReducer = createSlice({
    name:"productReducer",
    initialState:{
        products:[]
    },
    reducers:{
        setProducts(state,action){
            state.products = action.payload
            console.log("products",state.products);
        }
    }
})
export const {
    setProducts,
} = productReducer.actions

export default productReducer.reducer