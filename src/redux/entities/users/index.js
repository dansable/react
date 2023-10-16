import {normalizedUsers} from "../../../constants/normalized-mock.js";
import {createSlice} from "@reduxjs/toolkit";
import {createEntityState} from "../../../utils/entity-state.js";


const initialState = createEntityState(normalizedUsers);

const {reducer} = createSlice({
  name: "users",
  initialState,
});

export default reducer;
