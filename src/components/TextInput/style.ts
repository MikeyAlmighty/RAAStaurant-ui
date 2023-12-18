import styled from "styled-components";
import { MARGIN, PADDING } from "@/utils/theme.ts";
import { motion } from "framer-motion";
import { TextInputProps } from "@/components/TextInput/TextInput.tsx";

export const StyledTextInput = styled(motion.input)<TextInputProps>`
  margin: ${MARGIN.s};
  padding: ${PADDING.m};
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
`;
