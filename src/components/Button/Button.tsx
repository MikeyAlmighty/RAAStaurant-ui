import React, { MouseEventHandler } from "react";

import { BUTTON_TYPE } from "@/utils/constants.ts";
import { MStyledProps } from "@/mstyled.ts";
import { StyledButton } from "@/components/Button/style.ts";

export type ButtonProps = MStyledProps & {
  text?: string;
  $buttonType?: BUTTON_TYPE;
  disabled: boolean;
  testId?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  $buttonType,
  disabled,
  $pt,
  $pr,
  $pb,
  $pl,
  $mt,
  $mr,
  $mb,
  $ml,
  text,
  testId,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      data-testid={testId}
      $buttonType={$buttonType}
      disabled={disabled}
      $mt={$mt}
      whileHover={{
        rotate: [0, 0, -5, 5, 0],
        border: "1px solid black",
      }}
      transition={{
        duration: 0.25,
        ease: "linear",
      }}
      $mr={$mr}
      $mb={$mb}
      $ml={$ml}
      $pt={$pt}
      $pr={$pr}
      $pb={$pb}
      $pl={$pl}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
