import {useGetRestaurantsQuery} from "../../../redux/services/restaurants.js";
import {useParams} from "react-router-dom";
import {Restaurant} from "../../../components/restaurant/component.jsx";

export const RestaurantPage = () => {
  const {id} = useParams();
  const {data: restaurant} = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({id: restaurantId}) => restaurantId === id),
      };
    },
  });

  if (!restaurant) {
    return null;
  }

  return (
    <Restaurant restaurant={restaurant}></Restaurant>
  );
};
