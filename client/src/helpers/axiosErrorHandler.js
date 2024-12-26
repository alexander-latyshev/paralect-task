import request from "axios";

export default function (error, api) {
  const axiosErr = error;
  if (request.isAxiosError(axiosErr) && axiosErr.response) {
    return api.rejectWithValue({
      error: axiosErr.response?.data,
    });
  }
  return api.rejectWithValue({
    error: "unknown error",
  });
}

