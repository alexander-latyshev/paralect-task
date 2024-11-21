import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = storeSlice.actions;
export default storeSlice.reducer;
