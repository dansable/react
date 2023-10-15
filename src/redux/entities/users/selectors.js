export const selectUsers = (state) => state.users;

export const selectUsersIds = (state) => selectUsers(state).ids;

export const selectUserById = (state, id) => selectUsers(state).entities[id];
