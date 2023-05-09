import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Box bg="gray.50" minH="100vh">
      <Header title={title} />
      <Box w="full" p={8}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
