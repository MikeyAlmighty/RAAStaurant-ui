import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { ColorType } from "../../utils/constants.ts";
import { COLORS } from "../../utils/theme.ts";

export type ButtonProps = {
  text?: string;
  buttonType?: ColorType;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const colorMap = {
  [ColorType.PRIMARY]: {
    backgroundColor: COLORS[ColorType.PRIMARY],
    color: COLORS.white,
  },
  [ColorType.SECONDARY]: {
    backgroundColor: COLORS[ColorType.SECONDARY],
    color: COLORS.black,
  },
  [ColorType.TERTIARY]: {
    backgroundColor: COLORS[ColorType.TERTIARY],
    color: COLORS.black,
  },
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  color: ${({ buttonType }) =>
    buttonType ? colorMap[buttonType].color : COLORS.white};
  background-color: ${(props) => {
    console.log("PROPS: ", props);
    return props.buttonType
      ? colorMap[props.buttonType].backgroundColor
      : COLORS.black;
  }};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
        ? "9px 30px 11px"
        : "14px 30px 16px"};
`;

const Button: React.FC<ButtonProps> = ({
  size,
  buttonType,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      buttonType={buttonType}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
