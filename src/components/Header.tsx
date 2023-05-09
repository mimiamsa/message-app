import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box bg="gray.100" px="4" py="2">
      <Flex justify="space-between" align="center">
        <Heading
          as="h1"
          size="sm"
          textAlign="center"
          color="gray.700"
          fontWeight="normal"
        >
          {title}
        </Heading>
      </Flex>
    </Box>
  );
};
