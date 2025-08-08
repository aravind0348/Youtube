import { createSlice } from "@reduxjs/toolkit";


const nslice=createSlice({
    name:"hamberger",
    initialState:{
        isopen:true
    },
    reducers:{
        togglemenu:(state)=>{
           state.isopen=!state.isopen
        },
        closeMenu:(state)=>{
            state.isopen=false;
        }
    }
})
export const{togglemenu,closeMenu}=nslice.actions;
export default nslice.reducer;