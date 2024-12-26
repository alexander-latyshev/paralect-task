import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencies } from "../api/currency";

const initialState = {
  status: "idle",
  error: null,
  items: [],
};

const currencySlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencies.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.items = payload;
      });
  },
});

export const {} = currencySlice.actions;
export default currencySlice.reducer;
