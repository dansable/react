import {createSlice} from "@reduxjs/toolkit";
import {createEntityState} from "../../../utils/entity-state.js";
import {normalizedDishes} from "../../../constants/normalized-mock.js";

const initialState = {
  ...createEntityState(normalizedDishes),
};

const {reducer} = createSlice({
  name: "dishes",
  initialState,
});

export default reducer;
