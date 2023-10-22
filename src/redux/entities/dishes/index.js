import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishesByRestaurantIfNotExist} from "./thunks/get-dishes.js";

const entityAdapter = createEntityAdapter();

const {reducer} = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getDishesByRestaurantIfNotExist.fulfilled, (state, {payload}) => {
        entityAdapter.setMany(state, payload);
      })
});

export default reducer;
