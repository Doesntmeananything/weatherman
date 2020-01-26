import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { Layout } from "./Layout";

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <Layout />
  </ThemeProvider>
);

export default App;
