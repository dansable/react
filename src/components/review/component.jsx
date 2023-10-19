import {UserContainer} from "../user/container.jsx";

export const Review = ({review}) => {
  return (
    <div><UserContainer id={review.userId}/> : {review.text}</div>
  );
};
