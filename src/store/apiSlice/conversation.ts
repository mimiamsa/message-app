import { Conversation } from "../../types/conversation";
import { chatApi } from "../chatApi";

const conversationApi = chatApi.injectEndpoints({
  endpoints: (build) => ({
    getConversations: build.query<Conversation[], string>({
      query: (userId) => `conversations/${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetConversationsQuery } = conversationApi;
