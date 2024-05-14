import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        user: "Default"
    },
    reducers:{
        changeUser: (state, action)=>{
            if(action.payload){
                state.user = "Hemant";
            }
            else{
                state.user = "Default"
            }
        },
    }
});

export const {changeUser} = userSlice.actions;

export default userSlice.reducer;