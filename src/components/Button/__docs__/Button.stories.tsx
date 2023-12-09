import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { ColorType } from "../../../utils/constants";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Primary",
    type: ColorType.PRIMARY,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Secondary",
    type: ColorType.SECONDARY,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};

export const Tertiary: Story = {
  args: {
    text: "Tertiary",
    type: ColorType.TERTIARY,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
