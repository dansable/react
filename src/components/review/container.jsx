import {Review} from "./component.jsx";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/reviews/selectors.js";

export const ReviewContainer = ({id}) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return <Review review={review}/>
};
