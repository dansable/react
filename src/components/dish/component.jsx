import {Button} from "../button/component.jsx";
import React, {useState} from "react";

export const Dish = ({name}) => {
  const [amount, setAmount] = useState(0);

  return (
    <>
      {name} -
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
