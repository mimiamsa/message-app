import { prettyDOM, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Conversation from "../pages/conversations/[id]";
import mockRouter from "next-router-mock";
// import { act } from "react-test-renderer";
jest.mock("next/router", () => require("next-router-mock"));
describe("Messages chat", () => {
  it("should display existing messages", async () => {
    mockRouter.push("/");
    // await act(async () =>
    //   render(
    //     <Provider store={store}>
    //       <Conversation />
    //     </Provider>
    //   )
    // );
    console.log(screen);
    expect(screen.getByText("Bonjour"));
    // const messageElement = screen.getByTestId("received-message-1");
    // prettyDOM(screen);
  });
});
