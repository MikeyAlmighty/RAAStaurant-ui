import React, { MouseEventHandler } from "react";
import { StyledButton } from "@/components/Button/style.ts";
import { COLOR } from "@/utils/theme.ts";
import { MStyledProps } from "@/mstyled.ts";

type ButtonType =
  | typeof COLOR.primary
  | typeof COLOR.secondary
  | typeof COLOR.tertiary;

export type ButtonProps = MStyledProps & {
  text?: string;
  $buttonType?: ButtonType;
  type: "submit" | "button" | "reset";
  disabled: boolean;
  testId?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  $buttonType,
  disabled,
  text,
  type = "button",
  testId,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      data-testid={testId}
      $buttonType={$buttonType}
      disabled={disabled}
      whileHover={{
        rotate: [0, 0, -5, 5, 0],
        border: "2px solid black",
      }}
      transition={{
        duration: 0.15,
        ease: "linear",
      }}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
