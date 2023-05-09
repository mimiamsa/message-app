import type { ReactElement } from "react";
import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import Conversations from "./conversations";

const Home: NextPage = (): ReactElement => {
  return (
    <Box>
      <Conversations />
    </Box>
  );
};

export default Home;
