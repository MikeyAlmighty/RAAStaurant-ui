import type { Meta, StoryObj } from "@storybook/react";
import ExampleButton from "./Example";
import { BUTTON_TYPE } from "../../../utils/constants";

const meta: Meta<typeof ExampleButton> = {
  title: "Button",
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    text: "Primary",
    $buttonType: BUTTON_TYPE.PRIMARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary",
    $buttonType: BUTTON_TYPE.SECONDARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary",
    $buttonType: BUTTON_TYPE.TERTIARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
