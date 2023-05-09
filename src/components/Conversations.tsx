import React, { ReactElement } from "react";
import { Conversation } from "../types/conversation";
import { Box, VStack } from "@chakra-ui/react";

import { ConversationCard } from "./ConversationCard";

type ConversationsProps = { conversations: Conversation[] };

export const Conversations = ({
  conversations,
}: ConversationsProps): ReactElement => {
  return (
    <Box w="full" margin="0 auto" marginY={8} paddingX={8}>
      <VStack spacing={6}>
        {conversations.map((conversation: Conversation) => (
          <ConversationCard key={conversation.id} conversation={conversation} />
        ))}
      </VStack>
    </Box>
  );
};
