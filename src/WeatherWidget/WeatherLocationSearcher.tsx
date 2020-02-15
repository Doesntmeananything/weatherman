import React from "react";
import { Input, Box, Button, Stack } from "@chakra-ui/core";

import weatherData from "./mockWeatherAPI.json";
import { WeatherCard } from "./WeatherCard";

export const WeatherLocationSearcher = () => {
  return (
    <Stack spacing={4}>
      <Box shadow="sm" minW="md" borderWidth="1px" rounded="lg" p={4}>
        <Stack isInline spacing={4}>
          <Input size="lg" placeholder="e.g. New York" />
          <Button variantColor="teal" size="lg">
            Search
          </Button>
        </Stack>
      </Box>
      <WeatherCard weatherData={weatherData} />
    </Stack>
  );
};
