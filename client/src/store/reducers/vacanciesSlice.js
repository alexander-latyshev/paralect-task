import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencies } from "../api/currency";
import { fetchVacancies, postVacancy } from "../api/vacancies";
import { LIMIT_ITEMS } from "../../consts";
import parseLocalStorage from "../../helpers/parseLocalStorage";

const initialState = {
  status: "idle",
  error: null,
  items: [],
  currentItem: null,
  favorites: parseLocalStorage("favorites"),
  count: null,
  page: 1,
  totalPages: null,
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    addFavorite: (state, { payload }) => {
      if (!state.favorites.some((el) => el._id === payload._id)) {
        state.favorites.push({ ...payload, isEditing: false });
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((el) => el._id !== payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    startEdit: (state, { payload }) => {
      const editingItem = state.favorites.find((el) => el._id === payload);
      if (editingItem) {
        editingItem.isEditing = true;
      }
    },
    submitEdit: (state, { payload }) => {
      const editingIndex = state.favorites.findIndex(
        (el) => el._id === payload._id
      );
      if (editingIndex !== -1) {
        state.favorites[editingIndex] = { ...payload, isEditing: false };
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVacancies.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.items = payload.vacancies;
        state.count = payload?.count;
        state.totalPages = Math.ceil(payload?.count / LIMIT_ITEMS);
        state.error = null;
      })
      .addCase(postVacancy.fulfilled, (state, action) => {
        state.status = "success";
        console.log("postVacancy.fulfilled", action);
      });
  },
});

export const { addFavorite, removeFavorite, setPage, startEdit, submitEdit } =
  vacanciesSlice.actions;
export default vacanciesSlice.reducer;
