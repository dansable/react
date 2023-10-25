import {api} from "./api.js";

export const restaurantsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: `restaurants`,
      }),
      providesTags: (result) =>
        (result || [])
          .map(({id}) => ({type: "Restaurants", id}))
          .concat(
            {type: "Restaurants", id: "ALL"}
          ),
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
} = api;
