import React, { MouseEventHandler } from "react";

import { MStyledProps } from "@/mstyled.ts";
import {
  Container,
  Description,
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
  // discount,
  onClick,
  ...props
}) => {
  return (
    <Container
      whileHover={{
        scale: 1.1,
        border: "1px solid black",
      }}
    >
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
