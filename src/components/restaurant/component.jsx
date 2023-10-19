import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {Reviews} from "../reviews/component.jsx";
import {AddReviewButton} from "../add-review-button/component.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu dishesIds={restaurant.menu}/>
      <Reviews ids={restaurant.reviews}/>
      <AddReviewButton/>
    </div>
  );
};
