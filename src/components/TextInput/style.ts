import styled from "styled-components";
import {
  MARGIN,
  PADDING,
  COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/utils/theme.ts";
import { motion } from "framer-motion";
import { TextInputProps } from "@/components/TextInput/TextInput.tsx";

export const StyledTextInput = styled(motion.input)<
  Omit<TextInputProps, "label">
>`
  margin: ${MARGIN.s};
  padding: ${PADDING.m};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledErrorMessage = styled.span`
  color: ${COLOR.tertiary};
  margin: ${MARGIN.s};
  padding: ${PADDING.m};
`;

export const StyledLabel = styled.p`
  font-size: ${FONT_SIZE.base};
  font-weight: ${FONT_WEIGHT.bold};
`;

export const TextContainer = styled.span`
  display: flex;
  align-items: center;
  margin: ${MARGIN.m};
`;
