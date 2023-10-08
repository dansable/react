import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {Reviews} from "../reviews/component.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu menu={restaurant.menu}/>
      <Reviews reviews={restaurant.reviews}/>
    </div>
  );
};
