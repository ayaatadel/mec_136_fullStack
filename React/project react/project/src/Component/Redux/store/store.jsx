import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import themeReducer  from "./slices/theme";
import languageReducer  from "./slices/language";
import TestReducer from "./slices/test";
import LangReducer from "./slices/lang";
const store=configureStore({
    reducer:{
        counter:counterReducer ,/// counterSlice.reducer نقدر نستعديها باي اسم
        theme:themeReducer,
        language:languageReducer,
        lang:LangReducer,
        test:TestReducer,

    }
});

export default store;