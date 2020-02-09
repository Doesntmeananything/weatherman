import React, { useContext } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Text,
  Box,
  Image
} from "@chakra-ui/core";
import { fromUnixTime, format } from "date-fns";

import weatherData from "./mockWeatherAPI.json";
import { OptionsContext } from "./weatherOptionsContext";

const forecastDays = weatherData.forecast.forecastday;

export const ForecastPanel = () => {
  const { scale } = useContext(OptionsContext);
  const avgTemp = (day: { avgtemp_c: number; avgtemp_f: number }) =>
    scale === "C" ? `${day.avgtemp_c} °C` : `${day.avgtemp_f} °F`;

  return (
    <Tabs variant="enclosed">
      <TabList>
        {forecastDays.map(({ date_epoch, day }) => (
          <Tab key={date_epoch}>
            <Stack>
              <Text>{format(fromUnixTime(date_epoch), "EEE d")}</Text>
              <Image
                src={day.condition.icon}
                alt={day.condition.text}
                size="46px"
              />
              <Box>{avgTemp(day)}</Box>
            </Stack>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {forecastDays.map(({ date, day }) => (
          <TabPanel key={date}>{day.mintemp_c}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};
