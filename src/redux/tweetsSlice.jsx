import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTweets, toggleFollow, fetchUpdateFollowers } from "./operation";

export const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    item: [{
      user: '',
      tweets: '',
      followers:'',
      avatar: '',
      id: '',
    }],
    following: false,
    isLoading: false,
    error: null,
  },



  extraReducers: builder =>
    builder
      .addCase(fetchAllTweets.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTweets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.item = action.payload;
      })
      .addCase(fetchAllTweets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(toggleFollow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(toggleFollow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // state.item = action.payload;
      })
      .addCase(toggleFollow.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    .addCase(fetchUpdateFollowers.pending, (state) => state)
    .addCase(fetchUpdateFollowers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.item = action.payload.followers;
    })
    .addCase(fetchUpdateFollowers.rejected, (state) => state)
});

export const tweetsReducer = tweetsSlice.reducer;
