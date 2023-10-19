import {createAsyncThunk} from "@reduxjs/toolkit";

export const getReviews = createAsyncThunk(
  "restaurants/getReviews",
  async (params) => {
    const url = new URL("http://localhost:3001/api/reviews");
    url.search = new URLSearchParams(params);

    const response = fetch(url);

    return (await response).json();
  },
);
