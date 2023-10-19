import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/selectors.js";
import {Dish} from "./component.jsx";

export const DishContainer = ({id}) => {
  const dish = useSelector(state => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <Dish dish={dish}/>
};
