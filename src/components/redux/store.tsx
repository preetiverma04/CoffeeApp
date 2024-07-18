import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
const store=configureStore({
    reducer:RootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
        }),
});
export default store;