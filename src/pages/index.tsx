import type { ReactElement } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { NextPage } from "next";
import { loggedUserId } from "./_app";
import Conversations from "./conversations";

const Home: NextPage = (): ReactElement => {
  return (
    <Box>
      <Text>{loggedUserId} Conversations List </Text>
      <Conversations />
    </Box>
  );
};

export default Home;
