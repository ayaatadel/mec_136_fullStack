import { createSlice } from "@reduxjs/toolkit";
const langSlice=createSlice({
name:'language',
initialState:{
    value:'en',
    availableLanguages:['en','ar','fr']

},reducers:{

    setArabicLanguage:(state,action)=>{
        state.value=action.payload
    },
      setEnglishLanguage:(state,action)=>{
        state.value=action.payload
    },setLanguage(state,action){
        state.value=action.payload
    }

}})

export const{setArabicLanguage,setEnglishLanguage,setLanguage}=langSlice.actions
export default langSlice.reducer