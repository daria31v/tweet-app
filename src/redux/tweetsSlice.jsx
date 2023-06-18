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
        console.log(action.payload);
        // console.log(state.item);
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
    .addCase(fetchUpdateFollowers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUpdateFollowers.fulfilled, (state, action) => {
      console.log(action.payload.followers);
      console.log(state.item);

      state.isLoading = false;
      state.error = null;
       const index = state.item.filter(
          user => user.id === action.payload.id
        );
      state.item.splice(index, 2, action.payload);

      
      //  
      //   state.items.splice(index, 1, action.payload);
      })
         
    .addCase(fetchUpdateFollowers.rejected, (state) => state)
});

export const tweetsReducer = tweetsSlice.reducer;
