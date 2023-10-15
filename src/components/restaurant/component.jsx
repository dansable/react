import {RestaurantMenu} from "../restaurant-menu/component.jsx";
import {Reviews} from "../reviews/component.jsx";
import {AddReviewButton} from "../add-review-button/component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/selectors.js";

export const Restaurant = ({id}) => {
  const restaurant = useSelector(state => selectRestaurantById(state, id));

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu dishesIds={restaurant.menu}/>
      <Reviews ids={restaurant.reviews}/>
      <AddReviewButton/>
    </div>
  );
};
