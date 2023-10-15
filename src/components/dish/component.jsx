import {Button} from "../button/component.jsx";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectDishById} from "../../redux/entities/dishes/selectors.js";

export const Dish = ({id}) => {
  const dish = useSelector(state => selectDishById(state, id));
  const [amount, setAmount] = useState(0);

  return (
    <>
      {dish.name} -
      <Button
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
        size="small"
        type="primary"
      >-</Button>
      {amount}
      <Button
        onClick={() => setAmount(amount + 1)}
        disabled={amount === 5}
        size="small"
        type="primary"
      >+</Button>
    </>
  );
};
