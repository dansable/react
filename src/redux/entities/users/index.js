import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getUsersIfNotExist} from "./thunks/get-users.js";

const entityAdapter = createEntityAdapter();

const {reducer} = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getUsersIfNotExist.fulfilled, (state, {payload}) => {
        entityAdapter.setAll(state, payload);
      })
});

export default reducer;
