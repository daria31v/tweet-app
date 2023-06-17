// import { createSelector } from '@reduxjs/toolkit';

export const selectAllTweets = state => state.tweets.item;
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;

// export const getValueFilter = state => state.filter;


// export const getFilteredContacts = createSelector(
//   [getContacts, getValueFilter],
//   (contacts, filter) => {
    
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
//   }
// );