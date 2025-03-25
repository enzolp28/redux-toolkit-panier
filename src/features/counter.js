import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state) => {
            state.value--
        },
        multiply: (state) => {
            state.value = state.value * 10
        }
    }
})

export const { increment, decrement, multiply } = counterSlice.actions
export default counterSlice.reducer
