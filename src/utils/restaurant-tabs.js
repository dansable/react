export const createRestaurantTabs = (restaurants) => restaurants.map((restaurant, index) => ({
  index,
  id: restaurant.id,
  title: restaurant.name,
  disabled: false
}));
