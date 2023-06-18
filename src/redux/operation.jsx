import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648c60758620b8bae7eccdd6.mockapi.io/api/";

export const fetchAllTweets = createAsyncThunk(
  "tweets/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users/?page=${page}&limit=3`);
      const tweets = response.data;
      return tweets;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUpdateFollowers = createAsyncThunk(
  "tweets/updateFollowings",
  async (data, thunkAPI) => {
    try {
      const { id, update } = data;
      const body = { followers: update };
      const response = await axios.put(`/users/${id}`, body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
