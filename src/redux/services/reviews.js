import {api} from "./api.js";

export const reviewsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews`,
        params: {
          restaurantId,
        },
      }),
      providesTags: (result, _, restaurantId) =>
        (result || [])
          .map(({id}) => ({type: "Reviews", id}))
          .concat(
            {type: "Reviews", id: restaurantId},
            {type: "Reviews", id: "ALL"}
          ),
    }),
    createReview: builder.mutation({
      query: ({restaurantId, newReview}) => ({
        url: `/review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, _, {restaurantId}) => [
        {type: "Reviews", id: restaurantId},
      ],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useCreateReviewMutation,
} = api;
