import {
    createSlice
} from "@reduxjs/toolkit";

const prodCartReducer = createSlice({
    name:"prodCartReducer",
    initialState: {
        products:[],
        cartItems: [],
    },

    reducers:{
        setProducts(state, action) {
            state.products = action.payload;
            console.log("products",state.products); // products is now loaded with items
          },
    }
})


export const {
    setProducts
} = prodCartReducer.actions
export default prodCartReducer.reducer