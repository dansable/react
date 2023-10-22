import {AddReviewButton} from "../add-review-button/component.jsx";
import {RestaurantMenuContainer} from "../restaurant-menu/container.jsx";
import {ReviewsContainer} from "../reviews/container.jsx";

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
