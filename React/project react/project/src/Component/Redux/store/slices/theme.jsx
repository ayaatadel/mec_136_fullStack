import { createSlice } from "@reduxjs/toolkit";


const themeSlice=createSlice({
    name:'theme',
    initialState:{
        mode:'light'
    },reducers:{
        setLightMode:(state,action)=>{
            state.mode=action.payload
            //state.mode='light'
        },setDarkMode:(state,action)=>{
            state.mode=action.payload
            //state.mode='dark'
        }
    }
})

export const{setDarkMode,setLightMode} = themeSlice.actions;
export default themeSlice.reducer;