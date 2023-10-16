import {normalizedReviews} from "../../../constants/normalized-mock.js";
import {createSlice} from "@reduxjs/toolkit";
import {createEntityState} from "../../../utils/entity-state.js";


const initialState = createEntityState(normalizedReviews);

const {reducer} = createSlice({
  name: "reviews",
  initialState,
});

export default reducer;
