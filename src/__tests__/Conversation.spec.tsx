import { render, screen } from "@testing-library/react";
import { ConversationCard } from "../components/ConversationCard";
import { formatTimestampToDate } from "../utils/utilsFunctions";
// import Conversations from "../pages/conversations";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Conversations } from "../components/Conversations";

const ConversationsData = {
  id: 1,
  recipientId: 2,
  recipientNickname: "Jeremie",
  senderId: 1,
  senderNickname: "Thibaut",
  lastMessageTimestamp: Date.now(),
};

describe("Conversation", () => {
  it("should display conversation info", () => {
    const ConversationData = {
      id: 1,
      recipientId: 2,
      recipientNickname: "Jeremie",
      senderId: 1,
      senderNickname: "Thibaut",
      lastMessageTimestamp: Date.now(),
    };
    render(<ConversationCard conversation={ConversationData} />);
    expect(screen.getByText("Thibaut")).toBeInTheDocument();
    expect(
      screen.getByText(
        formatTimestampToDate(ConversationData.lastMessageTimestamp)
      )
    ).toBeInTheDocument();
  });
  it("should show all conversations", async () => {
    // here I am currently researching how to achieve the mock but I can just split the components to send a objects as props
    const ConversationsData = [
      {
        id: 1,
        recipientId: 2,
        recipientNickname: "Jeremie",
        senderId: 1,
        senderNickname: "Thibaut",
        lastMessageTimestamp: Date.now(),
      },
      {
        id: 2,
        recipientId: 3,
        recipientNickname: "Patrick",
        senderId: 1,
        senderNickname: "Thibaut",
        lastMessageTimestamp: 1620284667,
      },
      {
        id: 3,
        recipientId: 1,
        recipientNickname: "Thibaut",
        senderId: 4,
        senderNickname: "Elodie",
        lastMessageTimestamp: 1625648667,
      },
    ];
    render(<Conversations conversations={ConversationsData} />);
    expect(screen.getAllByTestId("conversation-card")).toHaveLength(3);
    screen.debug(screen.getAllByTestId("conversation-card")); // here checking the length shoud correspon to length of mocked data
  });
  //   it("should show all conversations", async () => {
  // const mockStore = configureStore([thunk]);

  // const mockedStore = {
  //     api : {
  //         queries : {
  //             getConversations() : {
  //                 data:{
  //                     // stored data
  //                 },
  //             }
  //         }
  //     }
  // }
  //     // here I am currently researching how to achieve the mock but I can just split the components to send a objects as props
  //     render(
  //       <Provider store={mockedStore}>
  //         <Conversations />
  //       </Provider>
  //     );
  //     expect(screen.getAllByTestId("conversation-card")).toHaveLength(3); // here checking the length shoud correspon to length of mocked data
  //   });
});
