import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";
import { ChakraProvider } from "@chakra-ui/react";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
