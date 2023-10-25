import {api} from "./api.js";

export const dishesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: `dishes`,
        params: {
          restaurantId,
        },
      }),
      providesTags: (result, _, restaurantId) =>
        (result || [])
          .map(({id}) => ({type: "Dishes", id}))
          .concat(
            {type: "Dishes", id: restaurantId},
            {type: "Dishes", id: "ALL"}
          ),
    })
  }),
});

export const {
  useGetDishesQuery,
} = api;
