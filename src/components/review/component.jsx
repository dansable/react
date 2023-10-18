import {selectReviewById} from "../../redux/entities/reviews/selectors.js";
import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entities/users/selectors.js";
import {User} from "../../components/user/component.jsx";

export const Review = ({id}) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector(state => selectUserById(state, review.userId));

  return (
    <div><User name={user.name}/> : {review.text}</div>
  );
};
