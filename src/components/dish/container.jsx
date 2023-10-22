import {useDispatch, useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/selectors.js";
import {Dish} from "./component.jsx";
import {selectProductQuantityById} from "../../redux/ui/cart/selectors.js";
import {cartActions} from "../../redux/ui/cart/index.js";

export const DishContainer = ({id}) => {
  const dish = useSelector(state => selectDishById(state, id));
  const amount = useSelector(state => selectProductQuantityById(state, id));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrementProductQuantity = () => dispatch(cartActions.decrementProductQuantity({
    productId: id,
    quantity: 1
  }));
  const incrementProductQuantity = () => dispatch(cartActions.incrementProductQuantity({
    productId: id,
    quantity: 1
  }))

  return <Dish
    dish={dish}
    amount={amount}
    decrementProductQuantity={decrementProductQuantity}
    incrementProductQuantity={incrementProductQuantity}/>
};
