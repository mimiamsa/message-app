import React, { useEffect } from "react";

import { NextPage } from "next";

import { Conversations as ConversationsComponent } from "../../components/Conversations";

import { loggedUserId } from "../_app";
import { useGetConversationsQuery } from "../../store/apiSlice/conversation";

const Conversation: NextPage = () => {
  return <div>conversation</div>;
};

export default Conversation;
