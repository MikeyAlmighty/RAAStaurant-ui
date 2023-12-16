import type { Meta, StoryObj } from "@storybook/react";
import ExampleButton from "./ExampleButton";
import { COLOR } from "../../../utils/theme";

const meta: Meta<typeof ExampleButton> = {
  title: "Button",
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    text: "Primary",
    $buttonType: COLOR.primary,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary",
    $buttonType: COLOR.secondary,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary",
    $buttonType: COLOR.tertiary,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
