export const selectCart = (state) => state.cart;

export const selectProductQuantityById = (state, productId) => selectCart(state)[productId] || 0;
