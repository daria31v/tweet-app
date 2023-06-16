import axios from 'axios';

axios.defaults.baseURL = 'https://648c60758620b8bae7eccdd6.mockapi.io/api/';

export const getAllTweets = async () => {
    const resp = await axios.get(`users/?page=1&limit=3`);
    // console.log(resp.data);
    return resp.data;
  };

  export const putCountFollowers = async () => {
    const resp = await axios.put(`users/?page=1&limit=3`);
    // console.log(resp.data);
    return resp.data;
  };

// export const fetchAllContacts = createAsyncThunk(
//   'users/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/users');
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const addFollowers = createAsyncThunk(
//   'users/addFollowers',
//   async ({followers}, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts/${followers}', {followers});
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteFolowers = createAsyncThunk(
//   'users/deleteFolowers',
//   async (followers, thunkAPI) => {
//     try {
//       const response = await axios.delete('/contacts/${followers}', {followers});
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );