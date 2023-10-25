import {ReviewForm} from "./component.jsx";
import {useCreateReviewMutation} from "../../redux/services/reviews.js";
import {useEffect} from "react";

export const ReviewFormContainer = ({onSubmit, restaurantId}) => {
  const [createReview, {isLoading, isSuccess}] = useCreateReviewMutation();

  useEffect(() => {
    if (isSuccess) {
      onSubmit();
    }
  }, [onSubmit, isSuccess]);

  const submit = async (newReview) => {
    createReview({restaurantId, newReview});
  }

  return <ReviewForm onSubmit={submit} success={isSuccess} loading={isLoading}/>;
};
