import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  // const { query } = useRouter();
  // const title = query.id
  //   ? `Conversation`
  //   : `${loggedUserId} Conversations List `;
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
