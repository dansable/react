import {Button} from "../button/component.jsx";

export const Dish = ({dish, amount, decrementProductQuantity, incrementProductQuantity}) => {
  return (
    <>
      {dish.name} -
      <Button
        onClick={decrementProductQuantity}
        disabled={amount === 0}
        size="small"
        type="primary"
      >-</Button>
      {amount}
      <Button
        onClick={incrementProductQuantity}
        disabled={amount === 5}
        size="small"
        type="primary"
      >+</Button>
    </>
  );
};
