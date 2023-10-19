import {ReviewContainer} from "../review/container.jsx";

export const Reviews = ({ids}) => {
  return (
    <ul>
      {ids.map((id) => (
        <li key={id}>
          <ReviewContainer id={id}/>
        </li>))}
    </ul>
  );
};
