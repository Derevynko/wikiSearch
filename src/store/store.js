import { configureStore } from "@reduxjs/toolkit";
import userInputUpdateReducer from "./UserInputSlice"
import {wikiApi} from "./wikiAp"
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore ({
    reducer: {
        userInput:userInputUpdateReducer,
        [wikiApi.reducerPath]:wikiApi.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(wikiApi.middleware),
    devTools:true

})
setupListeners(store.dispatch)