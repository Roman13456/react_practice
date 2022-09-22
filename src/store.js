import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
export default configureStore({
    reducer:{
        todoList:counterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})