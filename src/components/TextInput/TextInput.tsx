import React, { HTMLInputTypeAttribute } from "react";

import {
  Container,
  StyledTextInput,
  StyledErrorMessage,
} from "@/components/TextInput/style.ts";
import { COLOR } from "@/utils/theme.ts";

export type TextInputProps = {
  label: string;
  defaultValue?: string;
  disabled: boolean;
  name: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  testId?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled,
  defaultValue,
  errorMessage,
  onChange,
  type = "text",
  name,
  label,
  ...props
}) => {
  console.log("error message: ", errorMessage);
  return (
    <Container>
      {label}:
      <StyledTextInput
        type={type}
        name={name}
        onChange={onChange}
        whileHover={{ border: `2px solid ${COLOR.primary}` }}
        defaultValue={defaultValue}
        disabled={disabled}
        {...props}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </Container>
  );
};

export default TextInput;
