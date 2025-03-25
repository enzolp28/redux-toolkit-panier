import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter"
import fruits from "./features/fruits"
import fruitsCart from "./features/fruitsCart";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        fruits,
        fruitsCart
    }
})