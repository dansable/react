import {ReviewForm} from "./component.jsx";
import {createReview} from "../../redux/entities/reviews/thunks/create-review.js";
import {useMakeRequest} from "../../hooks/use-make-request.js";

export const ReviewFormContainer = ({onSubmit, restaurantId}) => {
  const [, createNewReview, createReviewRequest] = useMakeRequest(createReview);

  const submit = async (newReview, cb) => {
    createNewReview({restaurantId, newReview});

    createReviewRequest.current?.then(() => {
      cb();
      onSubmit();
    });
  }

  return <ReviewForm onSubmit={submit}/>;
};
