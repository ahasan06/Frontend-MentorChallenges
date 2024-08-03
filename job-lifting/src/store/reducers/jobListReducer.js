import {
    createSlice
} from "@reduxjs/toolkit";

const jobListReducer = createSlice({
    name: "jobListReducer",
    initialState: {
        jobList: [],
        searchCart:[],
    },
    reducers: {
        setJobList: (state, action) => {
            state.jobList = action.payload
            console.log("Reducer state",state.jobList);
            
        },
        addRoleToSearchCart:(state,action)=>{
            if (!state.searchCart.includes(action.payload)) {
                state.searchCart.push(action.payload)
            }
            
        },
        removeRoleToSearchCart:(state,action) =>{
            state.searchCart = state.searchCart.filter((role)=>role!==action.payload)
        },
        clearSearchCart :(state)=>{
            state.searchCart = [];
        }
    }
})
export const {
    setJobList,
    addRoleToSearchCart,
    removeRoleToSearchCart,
    clearSearchCart
} = jobListReducer.actions
export default jobListReducer.reducer