import {normalizedRestaurants} from "../../../constants/normalized-mock.js";
import {createSlice} from "@reduxjs/toolkit";
import {createEntityState} from "../../../utils/entity-state.js";


const initialState = {
  ...createEntityState(normalizedRestaurants),
};

const {reducer} = createSlice({
  name: "restaurants",
  initialState,
});

export default reducer;
