import {DishContainer} from "../dish/container.jsx";


export const RestaurantMenu = ({dishesIds}) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishesIds.map((id) => (
          <li key={id}>
            <DishContainer id={id}/>
          </li>))}
      </ul>
    </div>
  );
};
