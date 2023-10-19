import {createAsyncThunk} from "@reduxjs/toolkit";

export const getDishes = createAsyncThunk(
  "restaurants/getDishes",
  async (params) => {
    const url = new URL("http://localhost:3001/api/dishes");
    url.search = new URLSearchParams(params);

    const response = fetch(url);

    return (await response).json();
  },
);
