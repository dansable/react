import {Tabs} from "../../components/tabs/component.jsx";
import {useState} from "react";
import {restaurants} from "../../constants/mock.js";
import {Restaurant} from "../../components/restaurant/component.jsx";

export const RestaurantsPage = () => {
  const [tabs, setTabs] = useState(restaurants.map((restaurant, index) => ({
    index,
    title: restaurant.name,
    disabled: false
  })));
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const selectRestaurant = (index) => {
    setSelectedRestaurant(restaurants[index]);
  };

  return (
    <div>
      <Tabs tabs={tabs} onSelect={selectRestaurant}></Tabs>
      <Restaurant restaurant={selectedRestaurant}></Restaurant>
    </div>
  );
};
