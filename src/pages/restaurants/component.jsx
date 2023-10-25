import {useGetRestaurantsQuery} from "../../redux/services/restaurants.js";
import {RestaurantTabsContainer} from "../../components/restaurant-tabs/container.jsx";
import {Outlet} from "react-router-dom";

export const RestaurantsPage = () => {
  const {data, isFetching} = useGetRestaurantsQuery();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <RestaurantTabsContainer
        restaurants={data}/>
      <Outlet/>
    </>
  );
};
