import React from "react";
import { useColorMode, Box, IconButton } from "@chakra-ui/core";

import { WeatherLocationSearcher } from "./WeatherWidget/WeatherLocationSearcher";

export const Layout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        as="header"
        borderBottomWidth="1px"
        d="flex"
        justifyContent="flex-end"
      >
        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          variant="ghost"
          m={2}
          fontSize="20px"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : "sun"}
        >
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
      </Box>
      <Box
        as="main"
        d="flex"
        alignItems="center"
        justifyContent="center"
        mt={8}
      >
        <WeatherLocationSearcher />
      </Box>
    </>
  );
};
