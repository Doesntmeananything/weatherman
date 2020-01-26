import React from "react";
import { Button, useColorMode, Box } from "@chakra-ui/core";

import { WeatherCard } from "./WeatherCard";

export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
      <Box as="main" d="flex" alignItems="center" justifyContent="center">
        <WeatherCard />
      </Box>
    </>
  );
};
