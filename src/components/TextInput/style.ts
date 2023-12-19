import styled from "styled-components";
import { MARGIN, PADDING, COLOR } from "@/utils/theme.ts";
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
`;

export const StyledErrorMessage = styled.span`
  color: ${COLOR.tertiary};
  margin: ${MARGIN.s};
  padding: ${PADDING.m};
`;
