import type { Meta, StoryObj } from "@storybook/react";
import ExampleInput from "./ExampleInput";

const meta: Meta<typeof ExampleInput> = {
  title: "Input",
  component: ExampleInput,
};

export default meta;
type Story = StoryObj<typeof ExampleInput>;

const register = () => {
  return null;
};
export const Enabled: Story = {
  args: {
    defaultValue: "Deadpool",
    name: "name",
    disabled: false,
    register,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Deadpool",
    name: "name",
    disabled: true,
    register,
  },
};

export const WithError: Story = {
  args: {
    defaultValue: "Deadpool",
    name: "name",
    errorMessage: "Does not eat chimichangas!",
    disabled: true,
    register,
  },
};
