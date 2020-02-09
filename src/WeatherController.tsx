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

import { OptionsContext, Options } from "./weatherOptionsContext";

export const WeatherController = (props: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const [tempScale, setTempScale] = useState<Options["tempScale"]>("C");
  const [speedScale, setSpeedScale] = useState<Options["speedScale"]>("kph");
  const [lengthScale, setLengthScale] = useState<Options["lengthScale"]>("mm");

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
          <Stack isInline spacing={16}>
            <RadioGroup
              onChange={e =>
                setTempScale(e.target.value as Options["tempScale"])
              }
              value={tempScale}
            >
              <Radio value="C">C</Radio>
              <Radio value="F">F</Radio>
            </RadioGroup>

            <RadioGroup
              onChange={e =>
                setSpeedScale(e.target.value as Options["speedScale"])
              }
              value={speedScale}
            >
              <Radio value="kph">kph</Radio>
              <Radio value="mph">mph</Radio>
            </RadioGroup>

            <RadioGroup
              onChange={e =>
                setLengthScale(e.target.value as Options["lengthScale"])
              }
              value={lengthScale}
            >
              <Radio value="mm">mm</Radio>
              <Radio value="in">in</Radio>
            </RadioGroup>
          </Stack>
        </Collapse>
      </Box>
      <OptionsContext.Provider value={{ tempScale, speedScale, lengthScale }}>
        {props.children}
      </OptionsContext.Provider>
    </Stack>
  );
};
