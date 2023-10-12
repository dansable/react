import {Tabs} from "../../components/tabs/component.jsx";
import {useState} from "react";
import {restaurants} from "../../constants/mock.js";
import {Restaurant} from "../../components/restaurant/component.jsx";
import {createRestaurantTabs} from "../../utils/restaurant-tabs.js";
import {Layout} from "../../layout/component.jsx";

export const RestaurantsPage = () => {
  const restaurantTabs = createRestaurantTabs(restaurants);
  const [selectedRestaurantIndex, setSelectedRestaurantIndex] = useState(0);
  const selectedRestaurant = restaurants[selectedRestaurantIndex];

  return (
    <Layout>
      <Tabs tabs={restaurantTabs} onSelect={setSelectedRestaurantIndex} selectedIndex={selectedRestaurantIndex}/>
      <Restaurant restaurant={selectedRestaurant}/>
    </Layout>
  );
};
