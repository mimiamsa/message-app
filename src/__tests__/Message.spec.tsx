import { prettyDOM, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Conversation from "../pages/conversations/[id]";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
describe("Messages chat", () => {
  it("should display existing messages", async () => {});
});
