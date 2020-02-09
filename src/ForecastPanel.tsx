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
  Image,
  Divider,
  SimpleGrid
} from "@chakra-ui/core";
import { fromUnixTime, format } from "date-fns";

import weatherData from "./mockWeatherAPI.json";
import { OptionsContext, Options } from "./weatherOptionsContext";

const forecastDays = weatherData.forecast.forecastday;

type DayData = {
  mintemp_c: number;
  maxtemp_c: number;
  avgtemp_c: number;
  mintemp_f: number;
  maxtemp_f: number;
  avgtemp_f: number;
};

const getTemps = (dayData: DayData, scale: Options["scale"]) => {
  return {
    max: scale === "C" ? dayData.maxtemp_c : dayData.maxtemp_f,
    min: scale === "C" ? dayData.mintemp_c : dayData.mintemp_f,
    avg: scale === "C" ? dayData.avgtemp_c : dayData.avgtemp_f
  };
};

type DayFeatureProps = {
  title: string;
  stat: number | string;
};

const DayFeature = ({ title, stat }: DayFeatureProps) => (
  <Stack spacing={2}>
    <Text fontSize="sm">{title}</Text>
    <Text fontSize="lg">{stat}</Text>
  </Stack>
);

export const ForecastPanel = () => {
  const { scale } = useContext(OptionsContext);

  const tabs: JSX.Element[] = [];
  const panels: JSX.Element[] = [];

  forecastDays.forEach(({ date_epoch, day, date, astro }) => {
    const { max, min, avg } = getTemps(day, scale);

    tabs.push(
      <Tab key={date_epoch}>
        <Stack>
          <Text>{format(fromUnixTime(date_epoch), "EEE d")}</Text>
          <Image
            src={day.condition.icon}
            alt={day.condition.text}
            size="46px"
          />
          <Text>
            {avg} °{scale}
          </Text>
        </Stack>
      </Tab>
    );

    panels.push(
      <TabPanel key={date}>
        <Box mt={4}>
          <Text fontSize="xl">Day details</Text>
          <Divider />
          <SimpleGrid columns={3} spacing={2}>
            <DayFeature title="Max temp" stat={`${max} °${scale}`}></DayFeature>
            <DayFeature title="Sunrise" stat={astro.sunrise}></DayFeature>
            <DayFeature title="Max wind" stat={day.maxwind_kph}></DayFeature>
            <DayFeature title="Min temp" stat={`${min} °${scale}`}></DayFeature>
            <DayFeature title="Sunset" stat={astro.sunset}></DayFeature>
            <DayFeature
              title="Precipitation"
              stat={day.totalprecip_mm}
            ></DayFeature>
          </SimpleGrid>
        </Box>
      </TabPanel>
    );
  });

  return (
    <Tabs variant="enclosed">
      <TabList>{tabs}</TabList>
      <TabPanels>{panels}</TabPanels>
    </Tabs>
  );
};
