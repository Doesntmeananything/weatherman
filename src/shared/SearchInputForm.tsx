import React, { useState } from "react";
import { Box, Stack, Input, Button } from "@chakra-ui/core";

export const SearchInputForm = ({ children, isLoading, handleSubmit }: any) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <Box shadow="sm" minW="720px" borderWidth="1px" rounded="lg" p={4}>
      <form onSubmit={handleSubmit(city)}>
        <Stack isInline spacing={4}>
          <Input
            value={city}
            onChange={handleInputChange}
            size="lg"
            placeholder="e.g. New York"
          />
          <Button
            isLoading={isLoading}
            type="submit"
            variantColor="teal"
            size="lg"
          >
            {children}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
