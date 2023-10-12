import {Dish} from "../dish/component.jsx";

export const RestaurantMenu = ({menu}) => {
  return (
    <ul>
      {menu.map(({name, id}) => (
        <li key={id}>
          <Dish name={name}></Dish>
        </li>))}
    </ul>
  );
};
