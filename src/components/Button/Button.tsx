import React, { MouseEventHandler } from "react";
import styled from "styled-components";

import { COLOR_TYPE } from "@/utils/constants.ts";
import { COLOR, PADDING } from "@/utils/theme.ts";
import { MStyledProps } from "@/mstyled.ts";
import { ButtonColorMapper } from "@/utils/colorMappers/ButtonColorMapper.ts";

export type ButtonProps = MStyledProps & {
  text?: string;
  $buttonType?: COLOR_TYPE;
  disabled?: boolean;
  testid?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  width: 15em;
  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  cursor: pointer;
  font-weight: 700;
  border-radius: 25px;
  display: inline-block;

  margin-top: ${({ $mt }) => $mt};
  margin-right: ${({ $mr }) => $mr};
  margin-bottom: ${({ $mb }) => $mb};
  margin-left: ${({ $ml }) => $ml};

  padding-top: ${({ $pt }) => $pt};
  padding-right: ${({ $pr }) => $pr};
  padding-bottom: ${({ $pb }) => $pb};
  padding-left: ${({ $pl }) => $pl};

  &:hover {
    border: 1px solid ${COLOR.black};
  }

  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  background-color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].backgroundColor : COLOR.black};
  padding: ${() => PADDING.l};
`;

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
  testid,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      data-testid={testid}
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
