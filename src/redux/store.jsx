import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from './filterSlice';
import { tweetsReducer } from "./tweetsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
// console.log(contactsReducer)

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filter: filtersReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
  devContacts: process.env.NODE_ENV === "development"
});
export const persistor = persistStore(store);
