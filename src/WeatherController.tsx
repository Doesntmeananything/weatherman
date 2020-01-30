import React, { useState, PropsWithChildren } from "react";
import {
  Input,
  Box,
  Collapse,
  Button,
  Stack,
  RadioGroup,
  Radio
} from "@chakra-ui/core";

import { OptionsContext } from "./weatherOptionsContext";

export const WeatherController = (props: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const [scale, setScale] = useState("C");

  return (
    <Stack spacing={4}>
      <Box shadow="sm" minW="md" borderWidth="1px" rounded="lg" p={4}>
        <Stack isInline spacing={4}>
          <Input size="lg" placeholder="e.g. New York" />
          <Button
            variantColor="teal"
            size="lg"
            rightIcon={isOpen ? "chevron-up" : "chevron-down"}
            onClick={handleToggle}
          >
            Options
          </Button>
        </Stack>
        <Collapse mt={4} isOpen={isOpen}>
          <RadioGroup onChange={e => setScale(e.target.value)} value={scale}>
            <Radio value="C">C</Radio>
            <Radio value="F">F</Radio>
          </RadioGroup>
        </Collapse>
      </Box>
      <OptionsContext.Provider value={{ scale }}>
        {props.children}
      </OptionsContext.Provider>
    </Stack>
  );
};
