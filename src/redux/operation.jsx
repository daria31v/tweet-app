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
    try {
      const body = { followers: data.followers };
      const response = await axios.put(`/users/${data.id}`, body);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// fetch('https://PROJECT_TOKEN.mockapi.io/tasks/1', {
//   method: 'PUT', // or PATCH
//   headers: {'content-type':'application/json'},
//   body: JSON.stringify({completed: true})
// }).then(res => {
//   if (res.ok) {
//       return res.json();
//   }
//   // handle error
// }).then(task => {
//   // Do something with updated task
// }).catch(error => {
//   // handle error
// })
// export const updateUser = createAsyncThunk(
//   'auth/updateUser',
//   async (body, thunkAPI) => {
//     try {
//       const data = await updateFetch(body);
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
