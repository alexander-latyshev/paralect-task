import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./reducers/storeSlice";

export const store = configureStore({
  reducer: {
    store: storeSlice,
  },
});
