import React from "react";
import {Dish} from "../dish/component.jsx";

export const Restaurant = ({restaurant}) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <ul>
        {restaurant.menu.map(({name}) => (<li>
          <Dish name={name}></Dish>
        </li>))}
      </ul>
      <ul>
        {restaurant.reviews.map((review) => (<li>
          {review.user} : {review.text}
        </li>))}
      </ul>
    </div>
  );
};
