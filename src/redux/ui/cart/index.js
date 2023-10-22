import {createSlice} from "@reduxjs/toolkit";

const {reducer, actions} = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    incrementProductQuantity: (state, {payload: {productId, quantity}}) => {
      state[productId] = (state[productId] || 0) + quantity;
    },
    decrementProductQuantity: (state, {payload: {productId, quantity}}) => {
      state[productId] = (state[productId] || 0) > 0 ? state[productId] - quantity : 0;
    },
    removeDishFromCart: (state, {payload: {productId}}) => {
      delete state[productId];
    },
    clearCart: () => ({}),
  }
});

export default reducer;
export {actions as cartActions};
