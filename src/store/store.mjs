import { configureStore } from "@reduxjs/toolkit";
import userInputUpdateReducer from "./UserInputSlice.mjs"
import {wikiApi} from "./wikiAp.mjs"
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