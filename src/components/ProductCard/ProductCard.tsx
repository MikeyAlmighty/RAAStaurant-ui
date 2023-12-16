import React, { MouseEventHandler } from "react";

import { MStyledProps } from "@/mstyled.ts";
import { StyledProductCard } from "@/components/ProductCard/style.ts";

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
    <StyledProductCard
      onClick={onClick}
      // data-testid={testId}
      $mt={$mt}
      whileHover={{
        rotate: [0, 0, -5, 5, 0],
        border: "1px solid black",
      }}
      transition={{
        duration: 0.25,
        ease: "linear",
      }}
      $mr={$mr}
      $mb={$mb}
      $ml={$ml}
      $pt={$pt}
      $pr={$pr}
      $pb={$pb}
      $pl={$pl}
      {...props}
    >
      {title}
      {description}
    </StyledProductCard>
  );
};

export default ProductCard;
