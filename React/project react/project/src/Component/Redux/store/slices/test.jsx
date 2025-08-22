
import { createSlice } from "@reduxjs/toolkit";
const testSlice=createSlice({
    'name':'test',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            state.value=action.payload
        },
        decrement:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {increment,decrement}=testSlice.actions
export default testSlice.reducer