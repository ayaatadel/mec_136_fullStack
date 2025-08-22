import { createSlice } from "@reduxjs/toolkit"

const langSlice=createSlice({
    name:'language',
    initialState:{
        currentLanguage:'en',
       availableLanguages:['en','fr','ar'],
     
    },reducers:{
        setLanguage:(state,action)=>{
            state.currentLanguage=action.payload
        }
    }
})

export const {setLanguage} = langSlice.actions
export default langSlice.reducer