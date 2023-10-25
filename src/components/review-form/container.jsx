import {ReviewForm} from "./component.jsx";
import {createReview} from "../../redux/entities/reviews/thunks/create-review.js";
import {useMakeRequest} from "../../hooks/use-make-request.js";
import {REQUEST_STATUS} from "../../constants/statuses.js";
import {useEffect} from "react";

export const ReviewFormContainer = ({onSubmit, restaurantId}) => {
  const [requestStatus, saveReview] = useMakeRequest(createReview);

  //срабатывает уже по окончанию реквеста
  if (requestStatus === REQUEST_STATUS.pending) {
    console.log('ReviewFormContainer requestStatus', requestStatus);
    // return <div>Loading...</div>;
  }

  useEffect(() => {
    if (requestStatus === REQUEST_STATUS.fulfilled) {
      onSubmit();
    }
  }, [onSubmit, requestStatus]);

  const submit = async (newReview) => {
    saveReview({restaurantId, newReview});
  }

  return <ReviewForm onSubmit={submit} requestStatus={requestStatus}/>;
};
