import { FC } from "react";
import ProductCard, { ProductCardProps } from "../ProductCard";

const ExampleProductCard: FC<ProductCardProps> = ({
  disabled = false,
  title = "Chicken Burger",
  description = "Gouda cheese, chicken breasts, little gem, white cabbage, honey",
  onClick = () => {},
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
      <ProductCard
        title={title}
        description={description}
        disabled={disabled}
        onClick={onClick}
      />
    </div>
  );
};

export default ExampleProductCard;
