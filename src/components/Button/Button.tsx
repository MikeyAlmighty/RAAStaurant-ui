import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { ColorType } from "../../utils/constants.ts";
import { COLOR } from "../../utils/theme.ts";

export type ButtonProps = {
  text?: string;
  buttonType?: ColorType;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const colorMap = {
  [ColorType.PRIMARY]: {
    backgroundColor: COLOR[ColorType.PRIMARY],
    color: COLOR.white,
  },
  [ColorType.SECONDARY]: {
    backgroundColor: COLOR[ColorType.SECONDARY],
    color: COLOR.black,
  },
  [ColorType.TERTIARY]: {
    backgroundColor: COLOR[ColorType.TERTIARY],
    color: COLOR.black,
  },
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 25px;
  display: inline-block;
  color: ${({ buttonType }) =>
    buttonType ? colorMap[buttonType].color : COLOR.white};
  background-color: ${(props) => {
    console.log("PROPS: ", props);
    return props.buttonType
      ? colorMap[props.buttonType].backgroundColor
      : COLOR.black;
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
