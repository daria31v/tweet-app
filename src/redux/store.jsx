import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer } from './filterSlice';
import { tweetsReducer } from './tweetsSlice';

// console.log(contactsReducer)

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    // filter: filtersReducer,
  },
});