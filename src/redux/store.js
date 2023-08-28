import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productSlice from "../components/Product/productSlice";

const combineReducer = combineReducers({
  getproduct: productSlice,
});

const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
