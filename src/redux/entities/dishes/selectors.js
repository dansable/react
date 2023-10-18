export const selectDishes = (state) => state.dishes;

export const selectDishesIds = (state) => selectDishes(state).ids;

export const selectDishById = (state, id) => selectDishes(state).entities[id];
