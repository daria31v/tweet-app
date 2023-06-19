import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./filter";

const filtersInitialState = {
  id: null,
  status: statusFilters.all,
};
// console.log(filtersInitialState);

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,

  reducers: {
    // state.status = action.payload;
    // store.dispatch({ type: 'ADD_ITEM', payload: 'Новый элемент' });
    // setStatusFilter(filtersInitialState, action) {
    //   switch (action.type) {
    //     case "all":
    //       return [filtersInitialState, action.payload];
    //     case 'follow':
    //       return filtersInitialState.filter(task => task.id !== action.payload);
    //     case "following":
    //       return filtersInitialState.map(tweet => {
    //         if (tweet.id !== action.payload) {
    //           return tweet;
    //         }
    //         return { ...tweet, following: !tweet.following };
    //       });
    //     default:
    //       return filtersInitialState;
    //   }
    // },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;