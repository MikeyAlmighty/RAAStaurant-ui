import { FC } from "react";
import TextInput, { TextInputProps } from "../TextInput";

const ExampleTextInput: FC<TextInputProps> = ({
  disabled = false,
  name,
  errorMessage,
  defaultValue,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <TextInput
        name={name}
        defaultValue={defaultValue}
        errorMessage={errorMessage}
        disabled={disabled}
      />
    </div>
  );
};

export default ExampleTextInput;
