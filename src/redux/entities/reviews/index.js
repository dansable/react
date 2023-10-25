import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviewsIfNotExist} from "./thunks/get-reviews.js";
import {createReview} from "./thunks/create-review.js";

const entityAdapter = createEntityAdapter();

const {reducer} = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(createReview.fulfilled, (state, {payload}) => {
        entityAdapter.addOne(state, payload);
      })
      .addCase(getReviewsIfNotExist.fulfilled, (state, {payload}) => {
        entityAdapter.setMany(state, payload);
      })
});

export default reducer;
