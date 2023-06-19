import { configureStore } from "@reduxjs/toolkit";
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

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,    
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
