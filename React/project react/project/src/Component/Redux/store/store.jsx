import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import themeReducer  from "./slices/theme";
import languageReducer  from "./slices/language";
const store=configureStore({
    reducer:{
        counter:counterReducer ,/// counterSlice.reducer نقدر نستعديها باي اسم
        theme:themeReducer,
        language:languageReducer
    }
});

export default store;