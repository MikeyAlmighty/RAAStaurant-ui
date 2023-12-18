import React, { HTMLInputTypeAttribute } from "react";
import { Container, StyledTextInput } from "@/components/TextInput/style.ts";

export type TextInputProps = {
  label: string;
  defaultValue?: string;
  disabled: boolean;
  type: HTMLInputTypeAttribute;
  testId?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled,
  defaultValue,
  type = "text",
  label,
  ...props
}) => {
  return (
    <Container>
      {label}:
      <StyledTextInput
        type={type}
        // whileHover={{ border: `2px solid ${COLOR.primary}` }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
        defaultValue={defaultValue}
        disabled={disabled}
        {...props}
      />
    </Container>
  );
};

export default TextInput;
