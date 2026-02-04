import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";

const SCHEDULER_BACKEND_URL =
  import.meta.env.VITE_API_URL ??
  "https://gpp-schedule-staging.herokuapp.com/graphql";

const REALTIME_BACKEND_URL =
  import.meta.env.VITE_REALTIME_API_URL ??
  "https://scheduler-realtime-b0b01f965ef5.herokuapp.com/graphql";

const wssWeatherUrl = new GraphQLWsLink(
  createClient({
    url: "wss://weather-graphql-ec26c2063b75.herokuapp.com/",
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

const API_URL = new URL(SCHEDULER_BACKEND_URL);
const REALTIME_API_URL = new URL(REALTIME_BACKEND_URL);

const WEATHER_BACKEND_URL =
  import.meta.env.VITE_WEATHER_URL ??
  "https://weather-graphql-ec26c2063b75.herokuapp.com/";

export const wsLink = new GraphQLWsLink(
  createClient({
    url: `${API_URL.protocol === "https:" ? "wss" : "ws"}://${API_URL.host}${API_URL.pathname
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

export const realtimeWsLink = new GraphQLWsLink(
  createClient({
    url: `${REALTIME_API_URL.protocol === "https:" ? "wss" : "ws"}://${REALTIME_API_URL.host}${REALTIME_API_URL.pathname
      }`,
    keepAlive: 10000,
    retryAttempts: Infinity,
    shouldRetry: () => true,
    on: {
      connected: () => {
        console.log("Realtime socket successfully connected");
      },
      error: (error) => {
        console.log("Realtime socket error", error);
      },
      closed: () => {
        console.log("Realtime socket closed");
      },
    },
  })
);

const httpLink = new HttpLink({
  uri: SCHEDULER_BACKEND_URL,
});

const realtimeHttpLink = new HttpLink({
  uri: REALTIME_BACKEND_URL,
});

const httpWeatherLink = new HttpLink({
  uri: WEATHER_BACKEND_URL,
});

const splitLink = split(
  (operation) => {
    const definition = getMainDefinition(operation.query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  split(
    (op) => op.getContext().clientName === "weatherClient",
    wssWeatherUrl,
    wsLink
  ),
  split(
    (op) => op.getContext().clientName === "weatherClient",
    httpWeatherLink,
    httpLink
  )
);

const realtimeSplitLink = split(
  (operation) => {
    const definition = getMainDefinition(operation.query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  realtimeWsLink,
  realtimeHttpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export const realtimeClient = new ApolloClient({
  link: realtimeSplitLink,
  cache: new InMemoryCache(),
});
