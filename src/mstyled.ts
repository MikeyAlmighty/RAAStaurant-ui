import { MARGIN, PADDING } from "@/utils/theme.ts";

export type MPaddingProps = Partial<{
  $pt: PADDING;
  $pb: PADDING;
  $padding: [PADDING, PADDING, PADDING, PADDING];
  $pl: PADDING;
  $pr: PADDING;
}>;

export type MMarginProps = Partial<{
  $mt: MARGIN;
  $mb: MARGIN;
  $margin: [MARGIN, MARGIN, MARGIN, MARGIN];
  $ml: MARGIN;
  $mr: MARGIN;
}>;

export type MStyledProps = MPaddingProps & MMarginProps;
