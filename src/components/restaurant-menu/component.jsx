import {Dish} from "../dish/component.jsx";

export const RestaurantMenu = ({dishesIds}) => {
  return (
    <ul>
      {dishesIds.map((id) => (
        <li key={id}>
          <Dish id={id}></Dish>
        </li>))}
    </ul>
  );
};
