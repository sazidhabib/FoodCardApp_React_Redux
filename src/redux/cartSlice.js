import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // Update quantity if item exists
        state.carts[itemIndex].qnty += 1;
      } else {
        // Add new item to the cart
        const tempItem = { ...action.payload, qnty: 1 };
        state.carts.push(tempItem);
      }
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
    removeOne: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        if (state.carts[itemIndex].qnty > 1) {
          // Decrement quantity if greater than 1
          state.carts[itemIndex].qnty -= 1;
        } else {
          // Remove item from the cart if quantity is 1
          state.carts = state.carts.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;
