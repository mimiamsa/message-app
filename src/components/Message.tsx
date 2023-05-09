import React from "react";
import { loggedUserId } from "../pages/_app";
import { Text, Box, TextProps } from "@chakra-ui/react";

type MessageProps = {
  messageBody: string;
  messageAuth: number;
  senderName: string;
};

interface TextMessageProps extends TextProps {
  backgroundColor?: string;
}

const TextMessage = ({
  children,
  backgroundColor = "gray.100",
  ...rest
}: TextMessageProps) => {
  return (
    <Text
      bg={backgroundColor}
      py={1}
      px={4}
      borderRadius="lg"
      w="fit-content"
      mb={3}
      {...rest}
    >
      {children}
    </Text>
  );
};

export const Message: React.FC<MessageProps> = ({
  messageBody,
  messageAuth,
  senderName,
}: MessageProps) => {
  if (messageAuth === loggedUserId) {
    return (
      <TextMessage bg="blue.500" color="white" alignSelf="end">
        {messageBody}
      </TextMessage>
    );
  }

  return (
    <Box>
      <Text fontSize="sm" color="gray.500" mb={1}>
        {senderName}
      </Text>
      <TextMessage bg="gray.200" color="gray.800">
        {messageBody}
      </TextMessage>
    </Box>
  );
};
