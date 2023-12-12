import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { COLOR_TYPE, SIZE } from "@/utils/constants.ts";
import { COLOR, PADDING } from "@/utils/theme.ts";

export type ButtonProps = {
  text?: string;
  buttonType?: COLOR_TYPE;
  disabled?: boolean;
  testid?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const colorMap = {
  [COLOR_TYPE.PRIMARY]: {
    backgroundColor: COLOR[COLOR_TYPE.PRIMARY],
    textColor: COLOR.white,
  },
  [COLOR_TYPE.SECONDARY]: {
    backgroundColor: COLOR[COLOR_TYPE.SECONDARY],
    textColor: COLOR.black,
  },
  [COLOR_TYPE.TERTIARY]: {
    backgroundColor: COLOR[COLOR_TYPE.TERTIARY],
    textColor: COLOR.black,
  },
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  width: 15em;
  color: ${({ buttonType }) =>
    buttonType ? colorMap[buttonType].textColor : COLOR.white};
  cursor: pointer;
  font-weight: 700;
  border-radius: 25px;
  display: inline-block;
  color: ${({ buttonType }) =>
    buttonType ? colorMap[buttonType].textColor : COLOR.white};
  background-color: ${({ buttonType }) =>
    buttonType ? colorMap[buttonType].backgroundColor : COLOR.black};
  padding: ${() => PADDING[SIZE.MEDIUM]};
`;

const Button: React.FC<ButtonProps> = ({
  buttonType,
  disabled,
  text,
  testid,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      data-testid={testid}
      button-type={buttonType}
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
