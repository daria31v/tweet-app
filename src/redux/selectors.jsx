import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './filter';

export const selectAllTweets = state => state.tweets.item;
// export const selectFollowers = state => state.tweets.item.followers;
export const selectStatusFilter = state => 
state.filter.status;
// console.log(state.filter.status);
export const selectIsLoading = state => state.tweets.isLoading;
export const selectError = state => state.tweets.error;

export const selectVisibleTasks = createSelector(
   
    [selectAllTweets, selectStatusFilter],
    (users, statusFilter) => {
      console.log("result reqest");  
      switch (statusFilter) {
        case statusFilters.follow:
          return users.filter(user => !user.follow);
        case statusFilters.following:
          return users.filter(user => user.following);
        default:
          return users.all;
      }
    }
  );
  
//   export const selectTaskCount = createSelector([selectTasks], tasks => {
//     console.log("Calculating task count");
  
//     return tasks.reduce(
//       (count, task) => {
//         if (task.completed) {
//           count.completed += 1;
//         } else {
//           count.active += 1;
//         }
//         return count;
//       },
//       { active: 0, completed: 0 }
//     );
//   });
  