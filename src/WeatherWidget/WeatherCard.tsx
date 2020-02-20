import React, { useState, useContext } from "react";
import { Box, Image, Stack, Text, RadioButtonGroup } from "@chakra-ui/core";
import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import { fromUnixTime, format } from "date-fns";

import { RadioIconButton } from "../shared/RadioIconButton";
import { ForecastPanel } from "./ForecastPanel";
import { WeatherDataContext } from "./WeatherDataContext";
import { OptionsContext, Options } from "./weatherOptionsContext";

export const WeatherCard = () => {
  const [scale, setScale] = useState<Options["scale"]>("metric");
  const { location, forecast, current } = useContext(WeatherDataContext);

  const { name } = location;
  const { forecastday } = forecast;
  const {
    temp_c,
    feelslike_c,
    temp_f,
    feelslike_f,
    condition,
    last_updated_epoch
  } = current;

  const temp = scale === "metric" ? temp_c : temp_f;
  const feelsLike = scale === "metric" ? feelslike_c : feelslike_f;
  const tempScale = scale === "metric" ? "C" : "F";

  const handleChange = (value: any) => setScale(value);

  return (
    <Box shadow="md" borderWidth="1px" rounded="lg" p={4}>
      <Box d="flex" alignItems="center" flexDirection="column" m={4}>
        <Stack spacing={3} align="center">
          <Text fontSize="xl">{name}</Text>
          <Text fontSize="sm">
            Last updated {format(fromUnixTime(last_updated_epoch), "h:mm aaa")}
          </Text>

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
