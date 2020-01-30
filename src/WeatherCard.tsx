import React, { useContext } from "react";
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex
} from "@chakra-ui/core";
import { IoIosSunny } from "react-icons/io";

import weatherData from "./mockWeatherAPI.json";
import { ForecastPanel } from "./ForecastPanel";
import { OptionsContext } from "./weatherOptionsContext";

export const WeatherCard = () => {
  const { name } = weatherData.location;

  const { scale } = useContext(OptionsContext);

  const { temp_c, feelslike_c, temp_f, feelslike_f } = weatherData.current;

  const temp = scale === "C" ? temp_c : temp_f;
  const feelsLike = scale === "C" ? feelslike_c : feelslike_f;

  return (
    <Box shadow="md" borderWidth="1px" rounded="lg" p={4}>
      <Flex align="center">
        <Box as={IoIosSunny} size="40%" flexGrow={1} p={2} />
        <Box flexGrow={2}>
          <Stat>
            <StatLabel>{name}</StatLabel>
            <StatNumber>
              {temp} °{scale}
            </StatNumber>
            <StatHelpText>
              Feels like {feelsLike} °{scale}
            </StatHelpText>
          </Stat>
        </Box>
      </Flex>
      <ForecastPanel />
    </Box>
  );
};
