import {DishContainer} from "../dish/container.jsx";


export const RestaurantMenu = ({dishes}) => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {dishes?.map((dish) => (
          <li key={dish.id}>
            <DishContainer dish={dish}/>
          </li>))
        }
      </ul>
    </div>
  );
};
