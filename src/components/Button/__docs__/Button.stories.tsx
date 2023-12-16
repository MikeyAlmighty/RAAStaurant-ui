import type { Meta, StoryObj } from "@storybook/react";
import ExampleButton from "./Example";
import { COLOR_TYPE } from "../../../utils/constants";

const meta: Meta<typeof ExampleButton> = {
  title: "Button",
  component: ExampleButton,
};

export default meta;
type Story = StoryObj<typeof ExampleButton>;

export const Primary: Story = {
  args: {
    text: "Primary",
    $buttonType: COLOR_TYPE.PRIMARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary",
    $buttonType: COLOR_TYPE.SECONDARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary",
    $buttonType: COLOR_TYPE.TERTIARY,
    disabled: false,
    onClick: () => console.log("Button"),
  },
};
