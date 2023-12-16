import React, { MouseEventHandler, ReactElement } from "react";

import { MStyledProps } from "@/mstyled.ts";
import {
  Container,
  Description,
  DiscountContainer,
  ImageContainer,
  StyledProductCard,
  TextContainer,
  Title,
} from "@/components/ProductCard/style.ts";

export type ProductCardProps = MStyledProps & {
  text?: string;
  disabled: boolean;
  discount: {
    hasDiscount: boolean;
    discountLabel?: string;
  };
  title: string;
  description: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  image: ReactElement;
};

const ProductCard: React.FC<ProductCardProps> = ({
  $pt,
  $pr,
  $pb,
  $pl,
  $mt,
  $mr,
  $mb,
  $ml,
  title,
  description,
  discount,
  onClick,
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
      <StyledProductCard
        onClick={onClick}
        // data-testid={testId}
        $mt={$mt}
        $mr={$mr}
        $mb={$mb}
        $ml={$ml}
        $pt={$pt}
        $pr={$pr}
        $pb={$pb}
        $pl={$pl}
        {...props}
      >
        <TextContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextContainer>
      </StyledProductCard>
    </Container>
  );
};

export default ProductCard;
