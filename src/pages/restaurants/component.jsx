import {useEffect, useState} from "react";
import {Layout} from "../../layout/component.jsx";
import {RestaurantContainer} from "../../components/restaurant/container.jsx";
import {RestaurantTabsContainer} from "../../components/restaurant-tabs/container.jsx";
import {useDispatch} from "react-redux";
import {getRestaurants} from "../../redux/entities/restaurants/thunks/get-resturants.js";
import {getUsers} from "../../redux/entities/users/thunks/get-users.js";

export const RestaurantsPage = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, []);

  return (
    <Layout>
      <RestaurantTabsContainer onSelect={setSelectedRestaurantId}
                               selectedId={selectedRestaurantId}/>
      {selectedRestaurantId && (<RestaurantContainer id={selectedRestaurantId}/>)}
    </Layout>
  );
};
