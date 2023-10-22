import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUsers} from "../selectors";

export const getUsersIfNotExist = createAsyncThunk(
  "restaurants/getUsersIfNotExists",
  async () => {
    const response = fetch("http://localhost:3001/api/users/");

    return (await response).json();
  },
  {
    condition: (_, {getState}) => !selectUsers(getState())?.length,
  }
);
