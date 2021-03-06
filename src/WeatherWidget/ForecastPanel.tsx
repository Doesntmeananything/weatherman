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
import {
  WiThermometerExterior,
  WiThermometer,
  WiSunrise,
  WiSunset,
  WiStrongWind,
  WiUmbrella
} from "react-icons/wi";

import { OptionsContext, Options } from "./weatherOptionsContext";

type DayData = {
  mintemp_c: number;
  maxtemp_c: number;
  avgtemp_c: number;
  mintemp_f: number;
  maxtemp_f: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  condition: {
    text: string;
    icon: string;
  };
};

const getTemps = (dayData: DayData, scale: Options["scale"]) => {
  return {
    max: scale === "metric" ? dayData.maxtemp_c : dayData.maxtemp_f,
    min: scale === "metric" ? dayData.mintemp_c : dayData.mintemp_f,
    avg: scale === "metric" ? dayData.avgtemp_c : dayData.avgtemp_f
  };
};

const getWindSpeed = (dayData: DayData, scale: Options["scale"]) => {
  return scale === "metric" ? dayData.maxwind_kph : dayData.maxwind_mph;
};

const getPrecipitationLength = (dayData: DayData, scale: Options["scale"]) => {
  return scale === "metric" ? dayData.totalprecip_mm : dayData.totalprecip_in;
};

type DayFeatureProps = {
  title: string;
  stat: number | string;
  icon: React.ElementType;
};

const DayFeature = ({ title, stat, icon }: DayFeatureProps) => (
  <Stack spacing={2}>
    <Text fontSize="sm">{title}</Text>
    <Stack isInline>
      <Box as={icon} size="32px"></Box>
      <Text fontSize="lg">{stat}</Text>
    </Stack>
  </Stack>
);

type ForecastPanelProps = {
  forecastDays: {
    date_epoch: number;
    day: DayData;
    date: string;
    astro: {
      sunrise: string;
      sunset: string;
    };
  }[];
};

export const ForecastPanel = ({ forecastDays }: ForecastPanelProps) => {
  const { scale } = useContext(OptionsContext);

  const tempScale = scale === "metric" ? "C" : "F";
  const speedScale = scale === "metric" ? "kph" : "mph";
  const lengthScale = scale === "metric" ? "mm" : "in";

  const tabs: JSX.Element[] = [];
  const panels: JSX.Element[] = [];

  forecastDays.forEach(({ date_epoch, day, date, astro }) => {
    const { max, min, avg } = getTemps(day, scale);
    const windSpeed = getWindSpeed(day, scale);
    const precipitationLength = getPrecipitationLength(day, scale);

    tabs.push(
      <Tab key={date_epoch}>
        <Stack w={16} align="center">
          <Text>{format(fromUnixTime(date_epoch), "EEE d")}</Text>
          <Image
            src={day.condition.icon}
            alt={day.condition.text}
            size="46px"
          />
          <Text>
            {avg} °{tempScale}
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
            <DayFeature
              icon={WiThermometer}
              title="Max temp"
              stat={`${max} °${tempScale}`}
            ></DayFeature>
            <DayFeature
              icon={WiSunrise}
              title="Sunrise"
              stat={astro.sunrise}
            ></DayFeature>
            <DayFeature
              icon={WiStrongWind}
              title="Max wind"
              stat={`${windSpeed} ${speedScale}`}
            ></DayFeature>
            <DayFeature
              icon={WiThermometerExterior}
              title="Min temp"
              stat={`${min} °${tempScale}`}
            ></DayFeature>
            <DayFeature
              icon={WiSunset}
              title="Sunset"
              stat={astro.sunset}
            ></DayFeature>
            <DayFeature
              icon={WiUmbrella}
              title="Precipitation"
              stat={`${precipitationLength} ${lengthScale}`}
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
