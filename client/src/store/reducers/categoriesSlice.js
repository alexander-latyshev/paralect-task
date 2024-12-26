import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../api/categories";

const initialState = {
  status: "idle",
  error: null,
  items: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.items = payload;
      });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
