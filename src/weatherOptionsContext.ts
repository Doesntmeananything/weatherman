import React from "react";

export type Options = {
  tempScale: "C" | "F";
  speedScale: "kph" | "mph";
  lengthScale: "mm" | "in";
};

const options: Options = {
  tempScale: "C",
  speedScale: "kph",
  lengthScale: "mm"
};

export const OptionsContext = React.createContext(options);
