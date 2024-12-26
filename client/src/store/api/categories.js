import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../http";
import axiosErrorHandler from "../../helpers/axiosErrorHandler";
import { SERVER_URL } from "../../consts";

const CATEGORIES_URL = `${SERVER_URL}/api/categories`;

const addToFavorite = async (pictureId) => {
  try {
    const body = { pictureId };
    const res = await $host.post(CATEGORIES_URL, body);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await $host.get(CATEGORIES_URL);
      return res.data;
    } catch (err) {
      return axiosErrorHandler(err, thunkAPI);
    }
  }
);

export { fetchCategories };
