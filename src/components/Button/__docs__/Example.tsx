import { FC } from "react";
import Button, { ButtonProps } from "../Button";

const ExampleButton: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  $buttonType,
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
        text={text}
        disabled={disabled}
        onClick={onClick}
        $buttonType={$buttonType}
      />
    </div>
  );
};

export default ExampleButton;
