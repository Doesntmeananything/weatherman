import React from "react";

export type Options = {
  scale: "metric" | "imperial";
};

const options: Options = {
  scale: "metric"
};

export const OptionsContext = React.createContext(options);
