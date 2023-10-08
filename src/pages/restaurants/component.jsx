import {Tabs} from "../../components/tabs/component.jsx";
import {useState} from "react";
import {restaurants} from "../../constants/mock.js";
import {Restaurant} from "../../components/restaurant/component.jsx";
import {createRestaurantTabs} from "../../utils/restaurant-tabs.js";

export const RestaurantsPage = () => {
  const restaurantTabs = createRestaurantTabs(restaurants);
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);
  const selectedRestaurant = restaurants[selectedRestaurantIndex];

  return (
    <div>
      <Tabs tabs={restaurantTabs} onSelect={setSelectedRestaurantIndex}/>
      <Restaurant restaurant={selectedRestaurant}/>
    </div>
  );
};
