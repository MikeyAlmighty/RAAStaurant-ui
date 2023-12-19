import { FC, ReactElement } from "react";

import {
  Container,
  Description,
  DiscountContainer,
  ImageContainer,
  StyledProductCard,
  TextContainer,
  Title,
} from "@/components/ProductCard/style.ts";

export type ProductCardProps = {
  title: string;
  description: string;
  text?: string;
  disabled: boolean;
  discount: Partial<{
    hasDiscount: boolean;
    discountLabel?: string;
  }>;
  image?: ReactElement;
};

const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  discount,
  image,
  ...props
}) => {
  return (
    <Container
      whileHover={{
        scale: 1.1,
        border: "1px solid black",
      }}
    >
      <ImageContainer>
        <>{image}</>
        {discount?.hasDiscount && (
          <DiscountContainer>{discount.discountLabel}</DiscountContainer>
        )}
      </ImageContainer>
      <StyledProductCard {...props}>
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </StyledProductCard>
    </Container>
  );
};

export default ProductCard;
