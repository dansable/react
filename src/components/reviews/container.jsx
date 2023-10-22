import {Reviews} from "./component.jsx";
import {useSelector} from "react-redux";
import {selectReviewsByRestaurantId} from "../../redux/entities/restaurants/selectors.js";
import {getReviewsIfNotExist} from "../../redux/entities/reviews/thunks/get-reviews.js";
import {getUsersIfNotExist} from "../../redux/entities/users/thunks/get-users.js";
import {REQUEST_STATUS} from "../../constants/statuses.js";
import {useRequest} from "../../hooks/use-request.js";

export const ReviewsContainer = ({restaurantId}) => {
  const reviewsIds = useSelector(state => selectReviewsByRestaurantId(state, restaurantId));

  const reviewsRequestStatus = useRequest(getReviewsIfNotExist, restaurantId);
  const usersRequestStatus = useRequest(getUsersIfNotExist);

  if (reviewsRequestStatus === REQUEST_STATUS.pending || usersRequestStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>
  }

  return (
    <Reviews ids={reviewsIds}/>
  );
};
