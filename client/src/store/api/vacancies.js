import { createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../http";
import axiosErrorHandler from "../../helpers/axiosErrorHandler";
import { SERVER_URL } from "../../consts";

const VACANCIES_URL = `${SERVER_URL}/api/vacancies`;

const fetchVacancies = createAsyncThunk(
  "vacancies/fetch",
  async ({ limit, page }, thunkAPI) => {
    try {
      const params = {
        limit,
        page,
      };
      const res = await $host.get(VACANCIES_URL, { params: { ...params } });
      return res.data;
    } catch (err) {
      return axiosErrorHandler(err, thunkAPI);
    }
  }
);

const postVacancy = createAsyncThunk(
  "vacancies/post",
  async ({ salary, company, position, status, note }, thunkAPI) => {
    try {
      const body = {
        salary,
        company,
        position,
        status,
        note,
      };
      const res = await $host.post(VACANCIES_URL, body);
      console.log("respostVacancy", res);

      return res.data;
    } catch (err) {
      return axiosErrorHandler(err, thunkAPI);
    }
  }
);

export { fetchVacancies, postVacancy };
