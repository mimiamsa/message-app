import React, { useEffect, useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/layout";

import { Input } from "@chakra-ui/input";
import { loggedUserId } from "../_app";
import { Button } from "@chakra-ui/button";
import {
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../store/apiSlice/message";

const Conversation: NextPage = () => {
  const router = useRouter();
  const conversationId = parseInt(router.query.id as string, 10);
  const [message, setMessage] = useState<string>("");
  const {
    data: storedMessages,
    isError,
    isLoading,
  } = useGetMessagesQuery(conversationId, { skip: !router.isReady });
  const [sendMessage] = useSendMessageMutation();

  if (isLoading || !router.isReady) {
    return <>...</>;
  }
  if (isError) {
    return <>...OOPs</>;
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    sendMessage({
      conversationId,
      authorId: loggedUserId,
      timestamp: Date.now(),
      body: message,
    });
    setMessage("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage({
        conversationId,
        authorId: loggedUserId,
        timestamp: Date.now(),
        body: message,
      });
      setMessage("");
    }
  };

  return (
    <div>
      {storedMessages.map((message) => (
        <Text key={message.body}>{message.body}</Text>
      ))}

      <Input
        placeholder="send message"
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        value={message}
      />
      <Button onClick={handleSubmit}>Send message</Button>
    </div>
  );
};

export default Conversation;
