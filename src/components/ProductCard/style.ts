import styled from "styled-components";
import { motion } from "framer-motion";
import {
  COLOR,
  FONT_WEIGHTS,
  MARGIN,
  PADDING,
  RADII,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "@/utils/theme.ts";
import { ProductCardProps } from "@/components/ProductCard/ProductCard.tsx";

export const StyledProductCard = styled.div<ProductCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0;
  line-height: 1;

  background-color: ${COLOR.screenBackground};
  cursor: pointer;
  font-weight: ${FONT_WEIGHTS.bold};

  border-radius: ${RADII.s};
  color: ${COLOR.black};
`;

export const Container = styled(motion.div)<ProductCardProps>`
  border-radius: ${RADII.s};
  border: 1px solid black;
  display: flex;
  cursor: pointer;
  height: ${SCREEN_HEIGHT.quarter};
  width: ${SCREEN_WIDTH.quarter};
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const TextContainer = styled.span`
  display: flex;
  flex-direction: column;
  padding: ${PADDING.l};
  height: 3.7em;
`;

export const Title = styled.span`
  color: ${COLOR.black};
  padding-bottom: ${PADDING.s};
`;

export const Description = styled.span`
  color: ${COLOR.secondary};
`;

export const DiscountContainer = styled.p`
  background-color: ${COLOR.tertiary};
  color: ${COLOR.white};
  padding: ${PADDING.xs};
  margin-right: ${MARGIN.xs};
  border-radius: ${RADII.s};
  width: 4em;
  position: absolute;
`;
