import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listeFruits: [
        {
            name: "Mango",
            url: "/images/mango.jpg",
            price: 4,
            id: 123456
        },
        {
            name: "Pastèque",
            url: "/images/watermelon.jpg",
            price: 2,
            id: 654321
        },
    ]
}

export const fruits = createSlice({
    name: "fruits",
    initialState
})

export default fruits.reducer