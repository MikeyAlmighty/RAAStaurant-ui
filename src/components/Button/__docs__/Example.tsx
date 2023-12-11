import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  buttonType = true,
  size = "small",
  text = "Button",
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
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        buttonType={buttonType}
      />
    </div>
  );
};

export default Example;
