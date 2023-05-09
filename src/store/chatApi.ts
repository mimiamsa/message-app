import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.serverRoute }),
  tagTypes: ["Messages", "Conversations"],
  endpoints: () => ({}),
});

console.debug({ chatApi });

// export const selectConversations =
// chatApi.endpointss
//   export const selectUsersResult = conversationApi.endpoints.getConversations.select()

//   const emptyUsers = []

//   export const selectAllUsers = createSelector(
//     selectUsersResult,
//     usersResult => usersResult?.data ?? emptyUsers
//   )

//   export const selectUserById = createSelector(
//     selectAllUsers,
//     (state, userId) => userId,
//     (users, userId) => users.find(user => user.id === userId)
//   )
