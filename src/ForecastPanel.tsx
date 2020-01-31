import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core";
import { fromUnixTime, format } from "date-fns";

import weatherData from "./mockWeatherAPI.json";

export const ForecastPanel = () => {
  const forecastDays = weatherData.forecast.forecastday;

  return (
    <Tabs variant="enclosed">
      <TabList>
        {forecastDays.map(({ date_epoch }) => (
          <Tab key={date_epoch}>
            {format(fromUnixTime(date_epoch), "EEE d")}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        <TabPanel>one!</TabPanel>
        <TabPanel>two!</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
