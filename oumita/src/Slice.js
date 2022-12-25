import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name : "name",
    initialState:{
        name : null,
    },
    reducers : {
        send : (state , action) => {
            state.name = action.payload;        
        },
        returnS : (state) => {
            state.name = null;
        },
    },
});

export const {send,returnS} = Slice.actions;

export const selectUser = (state) => state.name.name;

export default Slice.reducer;