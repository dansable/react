import {DishContainer} from "../dish/container.jsx";


export const RestaurantMenu = ({dishesIds}) => {
  return (
    <ul>
      {dishesIds.map((id) => (
        <li key={id}>
          <DishContainer id={id}/>
        </li>))}
    </ul>
  );
};
