import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const SCHEDULER_BACKEND_URL =
  import.meta.env.VITE_API_URL ??
  "https://gpp-schedule-staging.herokuapp.com/graphql";

const API_URL = new URL(SCHEDULER_BACKEND_URL);

export const wsLink = new GraphQLWsLink(
  createClient({
    url: `${API_URL.protocol === "https:" ? "wss" : "ws"}://${API_URL.host}${
      API_URL.pathname
    }`,
    keepAlive: 10000,
    retryAttempts: Infinity,
    shouldRetry: () => true,
    on: {
      connected: () => {
        console.log("Socket successfully connected");
      },
      error: (error) => {
        console.log("Socket error", error);
      },
      closed: () => {
        console.log("Socket closed");
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: SCHEDULER_BACKEND_URL,
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
