import React from "react";
import { Container, StyledTextInput } from "@/components/TextInput/style.ts";

export type TextInputProps = {
  label: string;
  defaultValue?: string;
  disabled: boolean;
  testId?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled,
  defaultValue,
  label,
  ...props
}) => {
  return (
    <Container>
      {label}:
      <StyledTextInput
        defaultValue={defaultValue}
        disabled={disabled}
        {...props}
      />
    </Container>
  );
};

export default TextInput;
