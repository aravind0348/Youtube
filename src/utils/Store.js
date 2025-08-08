import { configureStore } from "@reduxjs/toolkit";
import appslice from "./newSlice";
const store=configureStore({
   reducer:{
     app:appslice,
   }
})
export default store;