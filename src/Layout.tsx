import React from "react";
import { Button, useColorMode, Box } from "@chakra-ui/core";

import { WeatherCard } from "./WeatherCard";
import { WeatherController } from "./WeatherController";

export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header>
        <Button variantColor="purple" onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <Box as="main" d="flex" alignItems="center" justifyContent="center">
        <WeatherController>
          <WeatherCard />
        </WeatherController>
      </Box>
    </>
  );
};
