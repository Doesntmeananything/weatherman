import React from "react";
import { IconButton } from "@chakra-ui/core";

type RadioIconButtonProps = {
  isChecked?: boolean;
  value: string;
  icon: React.ComponentType;
};

export const RadioIconButton = React.forwardRef(
  (props: RadioIconButtonProps, ref) => {
    const { isChecked, value, icon, ...rest } = props;

    return (
      <IconButton
        ref={ref}
        variantColor={isChecked ? "teal" : "gray"}
        variant="ghost"
        icon={icon}
        aria-checked={isChecked}
        fontSize="48px"
        aria-label={value}
        role="radio"
        {...rest}
      />
    );
  }
);
