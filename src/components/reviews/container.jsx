import {Reviews} from "./component.jsx";
import {useGetReviewsQuery} from "../../redux/services/reviews.js";
import {useGetUsersQuery} from "../../redux/services/users.js";

export const ReviewsContainer = ({restaurantId}) => {
  const reviews = useGetReviewsQuery(restaurantId);
  const users = useGetUsersQuery();

  if (reviews.isFetching || users.isFetching) {
    return <div>Loading...</div>
  }

  return (
    <Reviews reviews={reviews.data}/>
  );
};
