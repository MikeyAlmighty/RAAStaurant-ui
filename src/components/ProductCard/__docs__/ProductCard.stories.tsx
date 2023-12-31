import type { Meta, StoryObj } from "@storybook/react";
import ExampleProductCard from "./ExampleProductCard";

const meta: Meta<typeof ExampleProductCard> = {
  title: "ProductCard",
  component: ExampleProductCard,
};

export default meta;
type Story = StoryObj<typeof ExampleProductCard>;

export const NoDiscount: Story = {
  args: {
    disabled: false,
    discount: {
      hasDiscount: false,
    },
    title: "Chicken Burger",
    description:
      "Gouda cheese, chicken breasts, little gem, white cabbage, honey",
    onClick: () => console.log("Button"),
  },
};

export const Discount: Story = {
  args: {
    disabled: false,
    discount: {
      hasDiscount: true,
      discountLabel: "30% Off",
    },
    title: "Chicken Burger",
    description:
      "Gouda cheese, chicken breasts, little gem, white cabbage, honey",
    onClick: () => console.log("ProductCard"),
  },
};
