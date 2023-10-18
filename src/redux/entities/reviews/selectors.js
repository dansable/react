export const selectReviews = (state) => state.reviews;

export const selectReviewsIds = (state) => selectReviews(state).ids;

export const selectReviewById = (state, id) => selectReviews(state).entities[id];
