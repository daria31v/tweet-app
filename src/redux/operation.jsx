import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://648c60758620b8bae7eccdd6.mockapi.io/api/";

export const fetchAllTweets = createAsyncThunk(
  "tweets/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/users`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchByIdUser = createAsyncThunk(
  "tweets/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${id}`);
      // console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleFollow = createAsyncThunk(
  "tweets/follow",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/users/${id}`);
      // const followers = response.data.followers;
      // console.log(response.data);
      const data = response.data;
      // console.log(data.followers);
      const follow = data.followers;
      return follow;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUpdateFollowers = createAsyncThunk(
  "tweets/updateFollowings",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const {id, update} = data
      const body = { followers: update };
      // console.log(body);
      console.log(update);
      const response = await axios.put(`/users/${id}`, body);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const existContacts = createAsyncThunk(
//   'contacts/existingContacts',
//   async (data, thunkAPI) => {
//     try {
//       const body = { name: data.name, number: data.number };
//       const response = await axios.patch(`/contacts/${data.id}`, body);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );