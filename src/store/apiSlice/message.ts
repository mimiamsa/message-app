import { Message } from "../../types/message";
import { chatApi } from "../chatApi";

const messageApi = chatApi.injectEndpoints({
  endpoints: (build) => ({
    getMessages: build.query<Message[], number>({
      query: (conversationId) => `messages/${conversationId}`,
      providesTags: ["Messages"],
    }),

    sendMessage: build.mutation({
      query: (formData: Message) => ({
        url: `messages/${formData.conversationId}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetMessagesQuery, useSendMessageMutation } = messageApi;
