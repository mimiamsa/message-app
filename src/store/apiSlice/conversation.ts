import { Conversation } from "../../types/conversation";
import { chatApi } from "../chatApi";

const conversationApi = chatApi.injectEndpoints({
  endpoints: (build) => ({
    getConversations: build.query<Conversation[], string>({
      query: (userId) => `conversations/${userId}`,
      providesTags: ["Conversations"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetConversationsQuery } = conversationApi;
export const selectUsersResult = (arg) =>
  conversationApi.endpoints.getConversations.select(arg);
