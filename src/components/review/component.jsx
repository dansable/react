import {selectReviewById} from "../../redux/entities/reviews/selectors.js";
import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entities/users/selectors.js";

export const Review = ({id}) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector(state => selectUserById(state, review.userId));

  return (
    <div> {user.name} : {review.text}</div>
  );
};
