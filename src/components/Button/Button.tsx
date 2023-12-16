import React, { MouseEventHandler } from "react";

import { COLOR_TYPE } from "@/utils/constants.ts";
import { MStyledProps } from "@/mstyled.ts";
import { StyledButton } from "@/components/Button/style.ts";

export type ButtonProps = MStyledProps & {
  text?: string;
  $buttonType?: COLOR_TYPE;
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
