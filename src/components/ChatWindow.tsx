import { Box } from "@chakra-ui/react";
import React from "react";

export const ChatWindow = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      w={["100%", "100%", "60%"]}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      m="0 auto"
      p={8}
    >
      {children}
    </Box>
  );
};
