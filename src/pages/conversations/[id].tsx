import React, { useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";

import { loggedUserId } from "../_app";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../store/apiSlice/message";
import Layout from "../../components/Layout";
import { useGetConversationsQuery } from "../../store/apiSlice/conversation";
import { Message } from "../../components/Message";
import { ChatWindow } from "../../components/ChatWindow";
import MessageInput from "../../components/MessageInput";

const Conversation: NextPage = () => {
  const router = useRouter();
  const conversationId = parseInt(router.query.id as string, 10);
  const [message, setMessage] = useState<string>("");
  const {
    data: storedMessages,
    isError: isErrorMessage,
    isLoading: isLoadingMessage,
  } = useGetMessagesQuery(conversationId, { skip: !router.isReady });

  // @todo : remove this fetch and use selector
  const {
    data: conversations,
    isLoading: isLoadingconversation,
    isError: conversationError,
  } = useGetConversationsQuery(loggedUserId.toString());

  const senderName = conversations?.filter(
    (conversation) => conversation.id == conversationId
  )[0].senderNickname;

  const [sendMessage] = useSendMessageMutation();
  if (isLoadingMessage || isLoadingconversation || !router.isReady) {
    return <>...</>;
  }
  if (isErrorMessage || conversationError) {
    return <>...OOPs</>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const payload = {
    conversationId,
    authorId: loggedUserId,
    timestamp: Date.now(),
    body: message,
  };

  const handleSubmit = () => {
    sendMessage(payload);
    setMessage("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(payload);
      setMessage("");
    }
  };

  return (
    <Layout title={`${senderName} - you`}>
      <ChatWindow>
        {storedMessages.map((message) => (
          <Message
            key={message.body}
            messageAuth={message.authorId}
            messageBody={message.body}
            senderName={senderName}
          />
        ))}
        <MessageInput
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          handleSubmit={handleSubmit}
          message={message}
        />
      </ChatWindow>
    </Layout>
  );
};

export default Conversation;
