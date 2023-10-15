import {Review} from "../review/component.jsx";

export const Reviews = ({ids}) => {
  return (
    <ul>
      {ids.map((id) => (
        <li key={id}>
          <Review id={id}/>
        </li>))}
    </ul>
  );
};
