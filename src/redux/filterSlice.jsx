import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./filter";

const filtersInitialState = {
  // status: statusFilters.all,
  status: {
    follow: "follow",
    following: "following",
}
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;