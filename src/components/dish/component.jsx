import {Button} from "../button/component.jsx";
import {useState} from "react";

export const Dish = ({dish}) => {
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
