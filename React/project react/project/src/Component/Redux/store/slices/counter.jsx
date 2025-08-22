import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        // define all reducers that use these values
        increaseCounter:(state, action)=>{  
            // payload : new value that come from action 
            state.value=action.payload
        },
        decreaseCounter:(state,action)=>{
            state.value=action.payload
        },
        resetCounter:(state)=>{
            // هنا مش محتاجين ال action فممكن نشبله
            state.value=0
        }
    }
})

export const { increaseCounter, decreaseCounter, resetCounter } = counterSlice.actions;
export default counterSlice.reducer;

// actions we use it in component when happen any update
// reducer we define it in store in object reducer

