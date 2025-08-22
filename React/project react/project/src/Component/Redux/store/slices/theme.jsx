import { createSlice } from "@reduxjs/toolkit";


const themeSlice=createSlice({
    name:"theme", 
    initialState:{
        value:'light'
    },reducers:{
        setLightMode(state,action){
            // action know store change in our value 
            // payload ==> new  value
            state.value=action.payload;
        },
        setDarkMode(state,action){
            state.value=action.payload
        }

    }
})


export const {setLightMode,setDarkMode}=themeSlice.actions
export default themeSlice.reducer
/***
 * value  : light | dark
 * type   : string
 */