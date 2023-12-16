import styled from "styled-components";
import { motion } from "framer-motion";
import {
  COLOR,
  FONT_WEIGHTS,
  PADDING,
  RADII,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/utils/theme.ts";
import { ButtonProps } from "@/components/Button/Button.tsx";
import { ProductCardProps } from "@/components/ProductCard/ProductCard.tsx";

export const StyledProductCard = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  line-height: 1;

  background-color: ${COLOR.screenBackground};
  cursor: pointer;
  font-weight: ${FONT_WEIGHTS.bold};

  margin-top: ${({ $mt }) => $mt};
  margin-right: ${({ $mr }) => $mr};
  margin-bottom: ${({ $mb }) => $mb};
  margin-left: ${({ $ml }) => $ml};

  padding-top: ${({ $pt }) => $pt};
  padding-right: ${({ $pr }) => $pr};
  padding-bottom: ${({ $pb }) => $pb};
  padding-left: ${({ $pl }) => $pl};

  border-radius: ${RADII.s};
  color: ${COLOR.black};
`;

export const Container = styled(motion.div)<ProductCardProps>`
  border-radius: ${RADII.s};
  border: 1px solid black;
  display: flex;
  height: ${SCREEN_HEIGHT.quarter};
  width: ${SCREEN_WIDTH.quarter};
`;

export const ImageContainer = styled.div``;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding: ${PADDING.l};
`;

export const Title = styled.span`
  color: ${COLOR.black};
  padding-bottom: ${PADDING.m};
`;

export const Description = styled.span`
  color: ${COLOR.secondary};
`;

export const DiscountContainer = styled.span`
  background-color: ${COLOR.tertiary};
`;
