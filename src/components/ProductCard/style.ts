import styled from "styled-components";
import { motion } from "framer-motion";

import { ButtonColorMapper } from "@/utils/colorMappers/ButtonColorMapper.ts";
import { COLOR, WEIGHTS } from "@/utils/theme.ts";
import { ButtonProps } from "@/components/Button/Button.tsx";

export const StyledProductCard = styled(motion.button)<ButtonProps>`
  border: 0;
  line-height: 1;
  height: 3em;
  width: 15em;
  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  cursor: pointer;
  font-weight: ${WEIGHTS.bold};

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

  color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].textColor : COLOR.white};
  background-color: ${({ $buttonType }) =>
    $buttonType ? ButtonColorMapper[$buttonType].backgroundColor : COLOR.black};
`;

// export const Container = styled(motion.div)`
//   border-radius: ${RADII.s};
// `;
