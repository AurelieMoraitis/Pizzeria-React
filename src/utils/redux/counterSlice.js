import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "experience",
    initialState:{
        value: 0
    },
    reducers: {
        incrementXP: (state) => {
            state.value += 5
        }
    }
})

export const {incrementXP} = counterSlice.actions;

export default counterSlice.reducer;