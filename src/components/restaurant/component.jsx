import {RestaurantMenuContainer} from "../restaurant-menu/container.jsx";
import {ReviewsContainer} from "../reviews/container.jsx";
import {AddReviewButton} from "../add-review-button/component.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenuContainer restaurantId={restaurant.id}/>
      <ReviewsContainer restaurantId={restaurant.id}/>
      <AddReviewButton restaurantId={restaurant.id}/>
    </div>
  );
};
