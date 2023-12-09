import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { ColorType } from "../../utils/constants.ts";

export type ButtonProps = {
  text?: string;
  buttonType?: ColorType;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  display: inline-block;
  // TODO: Create Map
  color: ${(props) =>
    props.buttonType === ColorType.PRIMARY ? "#fff" : "#000"};
  // TODO: Create Map
  background-color: ${(props) =>
    props.buttonType === ColorType.PRIMARY ? "#FF5655" : "#f4c4c4"};
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
