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
