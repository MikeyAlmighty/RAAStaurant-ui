import { FC } from "react";
import TextInput, { TextInputProps } from "../TextInput";

const ExampleTextInput: FC<TextInputProps> = ({
  disabled = false,
  label,
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
        label={label}
        defaultValue={defaultValue}
        disabled={disabled}
      />
    </div>
  );
};

export default ExampleTextInput;
