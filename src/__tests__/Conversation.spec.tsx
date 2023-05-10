import { prettyDOM, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Conversation from "../pages/conversations/[id]";
import mockRouter from "next-router-mock";
import { ConversationCard } from "../components/ConversationCard";

const ConversationData = {
  id: 1,
  recipientId: 2,
  recipientNickname: "Jeremie",
  senderId: 1,
  senderNickname: "Thibaut",
  lastMessageTimestamp: 1625637849,
};
jest.mock("next/router", () => require("next-router-mock"));
describe("Messages chat", () => {
  it("ConversationCard should display conversation info", async () => {
    render(<ConversationCard conversation={ConversationData} />);
    expect(screen.getByText("Thibaut")).toBeInTheDocument();
  });
});
