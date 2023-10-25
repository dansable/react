import {RestaurantMenu} from "./component.jsx";
import {useGetDishesQuery} from "../../redux/services/dishes.js";

export const RestaurantMenuContainer = ({restaurantId}) => {
  const {data, isFetching} = useGetDishesQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <RestaurantMenu dishes={data}/>
  );
};
