import {
    createSlice
} from "@reduxjs/toolkit";

const noteReducer = createSlice({
    name:`noteReducer`,
    initialState:{
        notes:[],
        editNote:null,
    },
   
    reducers: {
         
        editNote(state, action) {
                state.editNote = action.payload; 
        }
    }
    
})

export const {
    notes,
    editNote
} = noteReducer.actions
export default noteReducer.reducer