import React, { ReactElement } from "react";
import { Conversation } from "../types/conversation";
import { Box, Text } from "@chakra-ui/react";

type ConversationsProps = { conversations: Conversation[] };

export const Conversations = ({
  conversations,
}: ConversationsProps): ReactElement => {
  return (
    <>
      <Box>Mapped conversation from store</Box>
      {conversations.map(({ id }) => (
        <Text key={id}>{id}</Text>
      ))}
    </>
  );
};
