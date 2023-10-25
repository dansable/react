import {User} from "./component.jsx";
import {useGetUsersQuery} from "../../redux/services/users.js";

export const UserContainer = ({id}) => {
  const {data: user} = useGetUsersQuery(undefined, {
    selectFromResult: (result) => {
      return {
        ...result,
        data: result?.data?.find(({id: userId}) => userId === id),
      };
    },
  });

  if (!user) {
    return null;
  }

  return <User user={user}/>;
};
