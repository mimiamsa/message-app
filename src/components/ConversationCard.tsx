import React, { ReactElement, forwardRef } from "react";
import { Avatar, Box, Card, Text } from "@chakra-ui/react";
import { Conversation } from "../types/conversation";
import {
  formatTimestampToDate,
  getRandomHexColor,
} from "../utils/utilsFunctions";
import Link from "next/link";

interface CardProps {
  conversation: Conversation;
}
export const ConversationCard = ({ conversation }: CardProps) => {
  const { senderNickname, lastMessageTimestamp } = conversation;
  return (
    <Box
      key={conversation.id}
      as={Link}
      href={`conversations/${conversation.id}`}
      w="full"
      maxW={["100%", "100%", "60%"]}
    >
      <Card
        display="grid"
        gridTemplateColumns={["48px auto"]}
        gridGap={6}
        alignItems="center"
        width="full"
        borderRadius="lg"
        border="1px solid transparent"
        _hover={{ border: "1px", borderColor: "inherit" }}
        padding={6}
      >
        <Avatar
          bg={getRandomHexColor()}
          color="white"
          name={senderNickname}
          size="md"
        ></Avatar>
        <div>
          <Text marginBottom={1} fontWeight="bold">
            {senderNickname}
          </Text>
          <Text color="gray.400" fontSize="sm">
            {formatTimestampToDate(lastMessageTimestamp)}
          </Text>
        </div>
      </Card>
    </Box>
  );
};
