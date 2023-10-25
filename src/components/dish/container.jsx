import {useDispatch, useSelector} from "react-redux";
import {Dish} from "./component.jsx";
import {selectProductQuantityById} from "../../redux/ui/cart/selectors.js";
import {cartActions} from "../../redux/ui/cart/index.js";

export const DishContainer = ({dish}) => {
  const amount = useSelector(state => selectProductQuantityById(state, dish.id));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrementProductQuantity = () => dispatch(cartActions.decrementProductQuantity({
    productId: dish.id,
    quantity: 1
  }));
  const incrementProductQuantity = () => dispatch(cartActions.incrementProductQuantity({
    productId: dish.id,
    quantity: 1
  }));

  return <Dish
    dish={dish}
    amount={amount}
    decrementProductQuantity={decrementProductQuantity}
    incrementProductQuantity={incrementProductQuantity}/>
};
