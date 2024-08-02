import {
    createSlice
} from "@reduxjs/toolkit";

const jobListReducer = createSlice({
    name: "jobListReducer",
    initialState: {
        jobList: []
    },
    reducers: {
        setJobList: (state, action) => {
            state.jobList = action.payload
            console.log("Reducer state",state.jobList);
            
        }
    }
})
export const {
    setJobList
} = jobListReducer.actions
export default jobListReducer.reducer