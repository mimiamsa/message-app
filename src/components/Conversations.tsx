import React, { MouseEventHandler, ReactElement, useEffect } from "react";
import { Conversation } from "../types/conversation";
import { Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

type ConversationsProps = { conversations: Conversation[] };

export const Conversations = ({
  conversations,
}: ConversationsProps): ReactElement => {
  return (
    <>
      <VStack spacing={8}>
        {conversations.map(({ id }) => (
          <Link key={id} href={`conversations/${id}`}>
            <Button>{id}</Button>
          </Link>
        ))}
      </VStack>
    </>
  );
};
