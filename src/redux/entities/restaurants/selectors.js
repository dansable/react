import {createSelector} from "@reduxjs/toolkit";

export const selectRestaurants = (state) => state.restaurants;

export const selectRestaurantsIds = (state) => selectRestaurants(state).ids;

export const selectRestaurantById = (state, id) => selectRestaurants(state).entities[id];

export const selectRestaurantEntities = (state) => selectRestaurants(state).entities;

export const selectRestaurantsByIds = createSelector(
  [
    selectRestaurantEntities,
    (state, ids) => ids
  ],
  (entities, ids) => ids.map((id) => entities[id])
)

export const selectMenuByRestaurantId = (state, id) => selectRestaurantById(state, id).menu;

export const selectReviewsByRestaurantId = (state, id) => selectRestaurantById(state, id).reviews;
