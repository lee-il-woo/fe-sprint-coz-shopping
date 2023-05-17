import { configureStore } from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarkSlice';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    bookmark: bookmarkReducer,
    products: productReducer,
  },
});
