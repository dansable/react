import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectReviewsByRestaurantId} from "../../restaurants/selectors.js";
import {selectReviewsIds} from "../selectors.js";

export const getReviewsIfNotExist = createAsyncThunk(
  "restaurants/getReviewsIfNotExist",
  async (restaurantId) => {
    const url = new URL("http://localhost:3001/api/reviews");
    url.search = new URLSearchParams({restaurantId});

    const response = fetch(url);

    return (await response).json();
  },
  {
    condition(restaurantId, {getState}) {
      const state = getState();
      const restaurantReviews = selectReviewsByRestaurantId(state, restaurantId);
      const reviewsIds = selectReviewsIds(state);

      return restaurantReviews?.some((reviewId) => !reviewsIds.includes(reviewId));
    }
  }
);
