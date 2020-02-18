import React, { useState, useEffect } from "react";
import { Stack } from "@chakra-ui/core";
import { useMachine } from "@xstate/react";

import mockWeatherData from "./mockWeatherAPI.json";
import { weatherFetcherMachine } from "./weatherFetcherMachine";
import { WeatherDataContext } from "./WeatherDataContext";
import { SearchInputForm } from "../shared/SearchInputForm";
import { WeatherCard } from "./WeatherCard";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const WeatherLocationSearcher = () => {
  const [initialData, setInitialData] = useState<any>(null);

  const [state, send] = useMachine(weatherFetcherMachine, {
    services: {
      fetchWeatherData: (_, e) =>
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${e.query}&days=7`
        ).then(res => res.json())
    }
  });

  const fetchInitialData = (lat: number, long: number) =>
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${long}&days=7`
    ).then(res => res.json());

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      const data = await fetchInitialData(latitude, longitude);
      setInitialData(data);
    });
  }, []);

  const { data } = state.context;

  const weatherData =
    process.env.NODE_ENV === "production"
      ? data || initialData
      : data || mockWeatherData;

  const handleSubmit = (city: string) => (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    send("FETCH", { query: city });
    e.preventDefault();
  };

  return (
    <Stack spacing={4} shouldWrapChildren={true}>
      <SearchInputForm
        isLoading={state.matches("loading")}
        handleSubmit={handleSubmit}
      >
        {state.matches("idle") && "Search"}
        {state.matches("success") && "Search"}
        {state.matches("failure") && "Try again"}
      </SearchInputForm>
      <WeatherDataContext.Provider value={weatherData}>
        {weatherData && <WeatherCard />}
      </WeatherDataContext.Provider>
    </Stack>
  );
};
