import {
    createSlice
} from "@reduxjs/toolkit";

const prodCartReducer = createSlice({
    name: "prodCartReducer",
    initialState: {
        products: [],
        cartItems: [],
    },

    reducers: {
        setProducts(state, action) {
            state.products = action.payload.map(product=>({
                ...product,
                price: parseFloat(product.price).toFixed(2),
                quantity:1
            }));
            console.log("products", state.products); 
        },
        addToCart(state, action) {
            const product = state.cartItems.find((item) => item.id === action.payload.id)
            product ? product.quantity++ : state.cartItems.push({
                ...action.payload,
                quantity: 1
            })
            console.log("addToCart",state.cartItems);
        },
        removeFromCart(state,action){
            state.cartItems = state.cartItems.filter((item)=>item.id!==action.payload.id)
            console.log("removeCart",state.cartItems);
        },
        modifyToCart(state, action) {
            const product = state.cartItems.find((item) => item.id === action.payload.id);
            if (product) {
              product.quantity = action.payload.quantity;
            }
          },
    }
})


export const {
    setProducts,
    addToCart,
    removeFromCart,
    modifyToCart
} = prodCartReducer.actions
export default prodCartReducer.reducer