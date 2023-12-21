import React, { HTMLInputTypeAttribute } from "react";

import {
  Container,
  StyledLabel,
  StyledTextInput,
  StyledErrorMessage,
  TextContainer,
} from "@/components/Input/style.ts";
import { COLOR } from "@/utils/theme.ts";
import { FieldValues, UseFormRegister } from "react-hook-form";

export type InputProps = {
  defaultValue?: number | string;
  disabled: boolean;
  name: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  testId?: string;
};

const Input: React.FC<InputProps> = ({
  disabled,
  defaultValue,
  errorMessage,
  type = "text",
  name,
  register,
  ...props
}) => {
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <Container>
      <TextContainer>
        <StyledLabel>{label}</StyledLabel>
        :
        <StyledTextInput
          type={type}
          {...props}
          {...(register ? register(name) : () => null)}
          whileHover={{ border: `2px solid ${COLOR.primary}` }}
          defaultValue={defaultValue}
          disabled={disabled}
        />
      </TextContainer>
      {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
    </Container>
  );
};

export default Input;
