import { MARGIN, PADDING } from "@/utils/theme.ts";

type MPaddingProps = {
  $pt: PADDING;
  $pb: PADDING;
  $padding: [PADDING, PADDING, PADDING, PADDING];
  $pl: PADDING;
  $pr: PADDING;
};

type MMarginProps = {
  $mt: MARGIN;
  $mb: MARGIN;
  $margin: [MARGIN, MARGIN, MARGIN, MARGIN];
  $ml: MARGIN;
  $mr: MARGIN;
};

export type MStyledProps = MPaddingProps & MMarginProps;
