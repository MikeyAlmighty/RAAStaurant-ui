import { FC } from "react";
import Input, { InputProps } from "../Input";

const ExampleInput: FC<InputProps> = ({
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
      <Input
        name={name}
        defaultValue={defaultValue}
        errorMessage={errorMessage}
        disabled={disabled}
      />
    </div>
  );
};

export default ExampleInput;
