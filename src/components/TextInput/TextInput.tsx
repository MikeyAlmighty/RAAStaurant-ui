import React, { HTMLInputTypeAttribute } from "react";

import {
  Container,
  StyledTextInput,
  StyledErrorMessage,
} from "@/components/TextInput/style.ts";
import { COLOR } from "@/utils/theme.ts";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type TextInputProps = {
  label: string;
  defaultValue?: string;
  disabled: boolean;
  name: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  testId?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  disabled,
  defaultValue,
  errorMessage,
  type = "text",
  name,
  label,
  register,
  ...props
}) => {
  console.log("error message: ", errorMessage);
  return (
    <Container>
      {label}:
      <StyledTextInput
        type={type}
        {...props}
        {...register(name)}
        whileHover={{ border: `2px solid ${COLOR.primary}` }}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </Container>
  );
};

export default TextInput;
