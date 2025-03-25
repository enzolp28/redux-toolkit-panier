import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter"
import fruits from "./features/fruits"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        fruits
    }
})