import {api} from "./api.js";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: `users`,
      }),
      providesTags: (result) =>
        (result || [])
          .map(({id}) => ({type: "Users", id}))
          .concat(
            {type: "Users", id: "ALL"}
          ),
    }),
  }),
});

export const {
  useGetUsersQuery,
} = api;
