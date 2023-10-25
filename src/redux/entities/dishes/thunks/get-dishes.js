import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectMenuByRestaurantId} from "../../restaurants/selectors.js";
import {selectDishesIds} from "../selectors.js";

export const getDishesByRestaurantIfNotExist = createAsyncThunk(
  "restaurants/getDishesByRestaurantIfNotExist",
  async (params) => {
    const url = new URL("http://localhost:3001/api/dishes");
    url.search = new URLSearchParams(params);

    const response = fetch(url);

    return (await response).json();
  },
  {
    condition({restaurantId}, {getState}) {
      const state = getState();
      const restaurantMenu = selectMenuByRestaurantId(state, restaurantId);
      const dishesIds = selectDishesIds(state);

      return restaurantMenu?.some((dishId) => !dishesIds.includes(dishId));
    }
  }
);
