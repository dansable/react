import {useState} from "react";
import {Layout} from "../../layout/component.jsx";
import {selectRestaurantsIds} from "../../redux/entities/restaurants/selectors.js";
import {useSelector} from "react-redux";
import {RestaurantTabs} from "../../components/restaurant-tabs/component.jsx";
import {Restaurant} from "../../components/restaurant/component.jsx";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurantIds[0]);

  return (
    <Layout>
      <RestaurantTabs restaurantsIds={restaurantIds}
                      onSelect={setSelectedRestaurantId}
                      selectedId={selectedRestaurantId}/>
      <Restaurant id={selectedRestaurantId}/>
    </Layout>
  );
};
