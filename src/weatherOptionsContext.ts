import React from "react";

export type Options = { scale: "C" | "F" };

const options: Options = {
  scale: "C"
};

export const OptionsContext = React.createContext(options);
