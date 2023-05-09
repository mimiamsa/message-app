import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.serverRoute }),
  tagTypes: ["Messages", "Conversations"],
  endpoints: () => ({}),
});
