import {RestaurantTabs} from "./component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantsIds} from "../../redux/entities/restaurants/selectors.js";

export const RestaurantTabsContainer = (props) => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (<RestaurantTabs {...props} restaurantsIds={restaurantsIds}/>);
};
