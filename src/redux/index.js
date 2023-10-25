import {configureStore} from "@reduxjs/toolkit";
import request from './ui/request';
import cart from './ui/cart';
import {loggerMiddleware} from "./middlewares/logger.js";
import {api} from "./services/api.js";

const store = configureStore({
  reducer: {
    request,
    cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    api.middleware,
    loggerMiddleware,
  ],
});

export default store;
