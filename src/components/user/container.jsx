import {useSelector} from "react-redux";
import {selectUserById} from "../../redux/entities/users/selectors.js";
import {User} from "./component.jsx";

export const UserContainer = ({id}) => {
  const user = useSelector(state => selectUserById(state, id));

  if (!user) {
    return null;
  }

  return <User user={user}/>;
};
