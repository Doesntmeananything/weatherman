import React, { useContext } from "react";
import { Box, Image, Stack, Text } from "@chakra-ui/core";

import weatherData from "./mockWeatherAPI.json";
import { ForecastPanel } from "./ForecastPanel";
import { OptionsContext } from "./weatherOptionsContext";

export const WeatherCard = () => {
  const { name } = weatherData.location;
  const { forecastday } = weatherData.forecast;

  const { scale } = useContext(OptionsContext);

  const {
    temp_c,
    feelslike_c,
    temp_f,
    feelslike_f,
    condition
  } = weatherData.current;

  const temp = scale === "C" ? temp_c : temp_f;
  const feelsLike = scale === "C" ? feelslike_c : feelslike_f;

  return (
    <Box shadow="md" borderWidth="1px" rounded="lg" p={4}>
      <Box d="flex" alignItems="center" flexDirection="column" m={4}>
        <Stack spacing={3} align="center">
          <Text fontSize="xl">{name}</Text>
          <Stack isInline justify="center" align="center">
            <Image src={condition.icon} alt={condition.text} />
            <Text fontSize="4xl">
              {temp} °{scale}
            </Text>
          </Stack>
          <Text fontSize="sm">
            Feels like {feelsLike} °{scale}
          </Text>
        </Stack>
      </Box>
      <ForecastPanel forecastDays={forecastday} />
    </Box>
  );
};
