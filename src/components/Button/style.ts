import styled from "styled-components";
import { motion } from "framer-motion";

import { ButtonColorMapper } from "@/utils/colorMappers/ButtonColorMapper.ts";
import { COLOR, FONT_SIZE, RADII, FONT_WEIGHT } from "@/utils/theme.ts";
import { ButtonProps } from "@/components/Button/Button.tsx";

export const StyledButton = styled(motion.button)<ButtonProps>`
  line-height: 1;
  font-size: ${FONT_SIZE.base};
  height: 3em;
  width: 15em;
  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  cursor: pointer;
  font-weight: ${FONT_WEIGHT.bold};

  text-transform: uppercase;

  border-radius: ${RADII.s};
  display: inline-block;
  overflow: hidden;
  position: relative;

  margin-top: ${({ $mt }) => $mt};
  margin-right: ${({ $mr }) => $mr};
  margin-bottom: ${({ $mb }) => $mb};
  margin-left: ${({ $ml }) => $ml};

  padding-top: ${({ $pt }) => $pt};
  padding-right: ${({ $pr }) => $pr};
  padding-bottom: ${({ $pb }) => $pb};
  padding-left: ${({ $pl }) => $pl};

  border: 1px solid ${COLOR.black};

  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  background-color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].backgroundColor : COLOR.black};
`;
