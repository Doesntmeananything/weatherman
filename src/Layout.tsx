import React from "react";
import {
  useColorMode,
  Box,
  IconButton,
  Link,
  Stack,
  Text,
  Flex,
  Button
} from "@chakra-ui/core";
import { DiGithubBadge } from "react-icons/di";

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
        <Flex size="100%" px="6" align="center" justify="space-around">
          <Button variant="ghost">
            <a href="/">
              <Text fontSize="xl">Weatherman</Text>
            </a>
          </Button>
          <Flex align="center">
            <Stack align="center" isInline spacing={3}>
              <Link
                isExternal
                href="https://github.com/Doesntmeananything/weatherman"
              >
                <Box as={DiGithubBadge} size="8" color="current" />
              </Link>
            </Stack>
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
          </Flex>
        </Flex>
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
