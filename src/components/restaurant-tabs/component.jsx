import {Tabs} from "../../components/tabs/component.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantsByIds} from "../../redux/entities/restaurants/selectors.js";
import {createRestaurantTabs} from "../../utils/restaurant-tabs.js";

export const RestaurantTabs = ({restaurantsIds, onSelect, selectedId}) => {
  const restaurants = useSelector((state) => selectRestaurantsByIds(state, restaurantsIds));
  const restaurantTabs = createRestaurantTabs(restaurants);

  return (
    <Tabs tabs={restaurantTabs} onSelect={onSelect} selectedId={selectedId}/>
  );
}
