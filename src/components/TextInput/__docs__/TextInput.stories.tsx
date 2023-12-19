import type { Meta, StoryObj } from "@storybook/react";
import ExampleTextInput from "./ExampleTextInput";

const meta: Meta<typeof ExampleTextInput> = {
  title: "TextInput",
  component: ExampleTextInput,
};

export default meta;
type Story = StoryObj<typeof ExampleTextInput>;

export const Enabled: Story = {
  args: {
    defaultValue: "Deadpool",
    label: "Name",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Deadpool",
    label: "Name",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    defaultValue: "Deadpool",
    label: "Name",
    errorMessage: "Does not eat chimichangas!",
    disabled: true,
  },
};
