import {useReducer} from "react";
import {Button} from "../button/component.jsx";
import styles from "./styles.module.scss";

const DEFAULT_VALUE = {
  name: "",
  text: "",
  rating: ""
};

const reducer = (state, action) => {
  switch (action?.type) {
    case "setName":
      return {...DEFAULT_VALUE, name: action.payload};
    case "setText":
      return {...state, text: action.payload};
    case "setRating":
      return {...state, rating: action.payload};
    case "reset":
      return {...DEFAULT_VALUE};
    default:
      return state;
  }
};

export const ReviewForm = ({onSubmit}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

  const submit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    dispatch({type: "reset"})
    onSubmit();
  }

  return (
    <form>
      <fieldset>
        <legend>Review:</legend>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input id="name"
                 name="name"
                 type="text"
                 value={formValue.name}
                 onChange={(event) => dispatch({type: "setName", payload: event.target.value})}/>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            name="text"
            rows={3}
            value={formValue.text}
            onChange={(event) => {
              dispatch({type: "setText", payload: event.target.value});
            }}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="rating">Rating</label>
          <input
            id="rating" name="rating"
            type="number"
            max="5"
            min="0"
            maxLength={1}
            value={formValue.rating}
            onChange={(event) => {
              dispatch({type: "setRating", payload: event.target.value});
            }}
          />
        </div>
        <Button htmlType="submit" type="primary" onClick={submit}>Submit</Button>
      </fieldset>
    </form>
  );
};
