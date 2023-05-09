import { NextPage } from "next";
import { Conversations as ConversationsComponent } from "../../components/Conversations";
import { loggedUserId } from "../_app";
import { useGetConversationsQuery } from "../../store/apiSlice/conversation";
import Layout from "../../components/Layout";

const Conversations: NextPage = () => {
  const {
    data: storedConversations,
    isError,
    isLoading,
  } = useGetConversationsQuery(loggedUserId.toString());

  if (isLoading) {
    return <>...</>;
  }
  if (isError) {
    return <>...OOPs</>;
  }
  return (
    <Layout title={`${loggedUserId} Conversations`}>
      <ConversationsComponent conversations={storedConversations} />
    </Layout>
  );
};

export default Conversations;
