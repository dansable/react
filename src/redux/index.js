import {configureStore} from "@reduxjs/toolkit";

import restaurants from './entities/restaurants';
import dishes from './entities/dishes';
import reviews from './entities/reviews';
import users from './entities/users';
import request from './ui/request';
import cart from './ui/cart';
import {loggerMiddleware} from "./middlewares/logger.js";

const store = configureStore({
  reducer: {
    restaurants,
    dishes,
    reviews,
    users,
    request,
    cart
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    loggerMiddleware,
  ],
});

export default store;
