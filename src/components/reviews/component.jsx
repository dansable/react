import {ReviewContainer} from "../review/container.jsx";

export const Reviews = ({ids}) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <ReviewContainer id={id}/>
          </li>))}
      </ul>
    </div>

  );
};
