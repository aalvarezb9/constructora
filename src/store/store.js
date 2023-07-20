import { configureStore } from '@reduxjs/toolkit';
import imageSlice from './imageSlice';
import mobileSlice from './mobileSlice';

export const store = configureStore({
  reducer: {
    image: imageSlice,
    mobile: mobileSlice
  }
})