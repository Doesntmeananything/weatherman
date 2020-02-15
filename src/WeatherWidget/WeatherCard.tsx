import React, { useState } from "react";
import { Box, Image, Stack, Text, RadioButtonGroup } from "@chakra-ui/core";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import { RadioIconButton } from "../shared/RadioIconButton";
import { ForecastPanel } from "./ForecastPanel";
import { WeatherDataProps } from "./WeatherData";
import { OptionsContext, Options } from "./weatherOptionsContext";

export const WeatherCard = ({ weatherData }: WeatherDataProps) => {
  const [scale, setScale] = useState<Options["scale"]>("metric");

  const handleChange = (value: any) => setScale(value);

  const { name } = weatherData.location;
  const { forecastday } = weatherData.forecast;

  const {
    temp_c,
    feelslike_c,
    temp_f,
    feelslike_f,
    condition
  } = weatherData.current;

  const temp = scale === "metric" ? temp_c : temp_f;
  const feelsLike = scale === "metric" ? feelslike_c : feelslike_f;
  const tempScale = scale === "metric" ? "C" : "F";

  return (
    <Box shadow="md" borderWidth="1px" rounded="lg" p={4}>
      <Box d="flex" alignItems="center" flexDirection="column" m={4}>
        <Stack spacing={3} align="center">
          <Text fontSize="xl">{name}</Text>
          <Stack isInline justify="center" align="center">
            <Image src={condition.icon} alt={condition.text} />
            <Text fontSize="4xl">{temp}</Text>
            <RadioButtonGroup
              d="flex"
              flexDirection="column"
              onChange={handleChange}
              value={scale}
              spacing={1}
            >
              <RadioIconButton value="metric" icon={WiCelsius} />
              <RadioIconButton value="imperial" icon={WiFahrenheit} />
            </RadioButtonGroup>
          </Stack>
          <Text fontSize="sm">
            Feels like {feelsLike} °{tempScale}
          </Text>
        </Stack>
      </Box>
      <OptionsContext.Provider value={{ scale }}>
        <ForecastPanel forecastDays={forecastday} />
      </OptionsContext.Provider>
    </Box>
  );
};
