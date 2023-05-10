import { createSelector } from "@reduxjs/toolkit";
import { Conversation } from "../../types/conversation";
import { chatApi } from "../chatApi";

const conversationApi = chatApi.injectEndpoints({
  endpoints: (build) => ({
    getConversations: build.query<Conversation[], number>({
      query: (userId) => `conversations/${userId}`,
      providesTags: ["Conversations"],
    }),
    // addConversations: build.mutation({
    //   query: (formData: Conversation) => ({
    //     url: `conversations/${formData.recipientId}`,
    //     method: "POST",
    //     body: formData,
    //   }),
    //   invalidatesTags: ["Conversations"],
    // }),
  }),
  overrideExisting: false,
});

export const { useGetConversationsQuery } = conversationApi;
// attempt to create selector
// export const selectUsersResult = (i) =>
//   conversationApi.endpoints.getConversations.select(i);

// export const conversationSelector = createSelector(
//   selectUsersResult,
//   (state, userId) => userId,
//   (conv, userId) => conv
// );
