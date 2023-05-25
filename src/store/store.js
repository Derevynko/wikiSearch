import { configureStore } from "@reduxjs/toolkit";
import userInputUpdateReducer from "./UserInputSlice"

export default configureStore ({
    reducer: {
        userInput:userInputUpdateReducer
    },
    devTools:true

})