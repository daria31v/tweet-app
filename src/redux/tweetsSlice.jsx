import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTweets } from "./operation";

// const handlePending = state => {
//     state.isLoading = true;
//   };
//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    item: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTweets.fulfilled, (state, action) => {
        // console.log(action, state);
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchAllTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

  // .addCase(existContacts.pending, (state) => state)
  // .addCase(existContacts.fulfilled, (state, action) => {
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload.id
  //   );
  //   state.items.splice(index, 1, action.payload);
  // })
  // .addCase(existContacts.rejected, (state) => state)
});

export const tweetsReducer = tweetsSlice.reducer;
