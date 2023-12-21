import type { Meta, StoryObj } from "@storybook/react";
import ExampleTextInput from "./ExampleTextInput";

const meta: Meta<typeof ExampleTextInput> = {
  title: "TextInput",
  component: ExampleTextInput,
};

export default meta;
type Story = StoryObj<typeof ExampleTextInput>;

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
