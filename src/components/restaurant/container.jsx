import {useDispatch, useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/selectors.js";
import {Restaurant} from "./component.jsx";
import {useEffect} from "react";
import {getDishes} from "../../redux/entities/dishes/thunks/get-dishes.js";
import {getReviews} from "../../redux/entities/reviews/thunks/get-reviews.js";

export const RestaurantContainer = ({id}) => {
  const restaurant = useSelector(state => selectRestaurantById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (restaurant) {
      dispatch(getDishes({restaurantId: id}));
      dispatch(getReviews({restaurantId: id}));
    }
  }, [id]);

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant restaurant={restaurant}></Restaurant>
  );
};
