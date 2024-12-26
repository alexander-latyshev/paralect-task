import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducers/categoriesSlice";
import currencySlice from "./reducers/currencySlice";
import vacanciesSlice from "./reducers/vacanciesSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    currencies: currencySlice,
    vacancies: vacanciesSlice,
  },
});
