import { createSlice } from "@reduxjs/toolkit";
const UserInputSlice = createSlice({
    name:"userInput",
    initialState: {
        userInput:"",
        requestData:[],
      
    },
    reducers: {
        updataUserInput(state, action) {
            state.userInput=action.payload
        },
        updataRequest(state, action) {
            state.requestData=action.payload
        },
        
}})

export const {updataUserInput, updataRequest} = UserInputSlice.actions
export default UserInputSlice.reducer