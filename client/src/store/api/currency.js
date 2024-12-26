import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../http";
import axiosErrorHandler from "../../helpers/axiosErrorHandler";
import { SERVER_URL } from "../../consts";

const CURRENCIES_URL = `${SERVER_URL}/api/currencies`;

const fetchCurrencies = createAsyncThunk(
  "currencies/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await $host.get(CURRENCIES_URL);
      return res.data;
    } catch (err) {
      return axiosErrorHandler(err, thunkAPI);
    }
  }
);

export { fetchCurrencies };
