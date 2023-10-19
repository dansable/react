import {selectRestaurantById} from "../../redux/entities/restaurants/selectors.js";
import {Tab} from "../tab/component.jsx";
import {useSelector} from "react-redux";

export const RestaurantTabContainer = ({id, ...props}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const tab = {
    id: restaurant.id,
    title: restaurant.name,
    disabled: false
  };

  return (
    <Tab {...props} tab={tab}/>
  );
};
