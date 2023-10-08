import {Dish} from "../dish/component.jsx";

export const RestaurantMenu = ({menu}) => {
  return (
    <ul>
      {menu.map(({name}) => (<li>
        <Dish name={name}></Dish>
      </li>))}
    </ul>
  );
};
