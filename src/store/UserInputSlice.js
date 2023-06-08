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
       
        
}})

export const {updataUserInput} = UserInputSlice.actions
export default UserInputSlice.reducer