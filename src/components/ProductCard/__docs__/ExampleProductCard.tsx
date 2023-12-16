import { FC } from "react";
import ProductCard, { ProductCardProps } from "../ProductCard";

const ExampleProductCard: FC<ProductCardProps> = ({
  disabled = false,
  title = "Chicken Burger",
  discount = {
    hasDiscount: true,
    discountLabel: "30% Off",
  },
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
        image={
          <img
            style={{ width: "16em", height: "8em", position: "relative" }}
            src={
              "https://i.pinimg.com/736x/d0/91/a1/d091a1b5fb9d52a5cf4d0f08ad86daa2.jpg"
            }
          />
        }
        disabled={disabled}
        discount={discount}
        onClick={onClick}
      />
    </div>
  );
};

export default ExampleProductCard;
