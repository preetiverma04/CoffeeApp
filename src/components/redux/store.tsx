import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
const store=configureStore({
    reducer:RootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false, // Disable immutable state check
            serializableCheck: false, // Optionally disable serializable check as well if needed
        }),
});
export default store;