import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

import { Layout } from "./Layout";

const App = () => {
  return (
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <Layout />
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
