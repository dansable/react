import {RestaurantMenu} from "./component.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectMenuByRestaurantId} from "../../redux/entities/restaurants/selectors.js";
import {useEffect} from "react";
import {getDishesByRestaurantIfNotExist} from "../../redux/entities/dishes/thunks/get-dishes.js";


export const RestaurantMenuContainer = ({restaurantId}) => {
  const dishesIds = useSelector((state => selectMenuByRestaurantId(state, restaurantId)));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishesByRestaurantIfNotExist({restaurantId}));
  }, [restaurantId]);

  return (
    <RestaurantMenu dishesIds={dishesIds}/>
  );
};
