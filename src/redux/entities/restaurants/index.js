import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurantsIfNotExists} from "./thunks/get-resturants.js";

const entityAdapter = createEntityAdapter();

const {reducer, actions} = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  reducers: {
    addReview: (state, {payload: {restaurantId, reviewId}}) => {
      entityAdapter.updateOne(state, {
        id: restaurantId,
        changes: {
          reviews: [...state.entities[restaurantId].reviews, reviewId]
        }
      })
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantsIfNotExists.fulfilled, (state, {payload}) => {
        entityAdapter.setAll(state, payload);
      })
});

export default reducer;
export {actions as restaurantActions};
