import { Machine, assign } from "xstate";

import { WeatherDataProps } from "./WeatherDataContext";

interface FetcherContext {
  data: WeatherDataProps | null;
  error: any;
}

interface FetcherStateSchema {
  states: {
    idle: {};
    loading: {};
    success: {};
    failure: {};
  };
}

type FetcherEvent = { type: "FETCH" } | { type: "CANCEL" };

export const weatherFetcherMachine = Machine<
  FetcherContext,
  FetcherStateSchema,
  FetcherEvent
>({
  id: "weather fetcher",
  initial: "idle",
  context: {
    data: null,
    error: null
  },
  states: {
    idle: {
      on: { FETCH: "loading" }
    },
    loading: {
      invoke: {
        src: "fetchWeatherData",
        onDone: {
          target: "success",
          actions: assign({ data: (_, event) => event.data })
        },
        onError: {
          target: "failure",
          actions: assign({ error: (_, event) => event.data })
        }
      },
      on: { CANCEL: "idle" }
    },
    success: {
      on: { FETCH: "loading" }
    },
    failure: {
      on: { FETCH: "loading" }
    }
  }
});
