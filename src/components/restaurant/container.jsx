import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/selectors.js";
import {Restaurant} from "./component.jsx";

export const RestaurantContainer = ({id}) => {
  const restaurant = useSelector(state => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant restaurant={restaurant}></Restaurant>
  );
};
