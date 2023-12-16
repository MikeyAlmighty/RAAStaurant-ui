import { BUTTON_TYPE } from "./constants.ts";

const COLOR = {
  [BUTTON_TYPE.PRIMARY]: "#37FB26",
  [BUTTON_TYPE.SECONDARY]: "#BCBDBD",
  [BUTTON_TYPE.TERTIARY]: "#F8587E",
  screenBackground: "#E1EAE9",
  black: "#000000",
  white: "#FFFFFF",
};

enum PADDING {
  xs = ".25em",
  s = ".5em",
  m = ".75em",
  l = "1em",
  xl = "1.25em",
}

enum MARGIN {
  xs = ".25em",
  s = ".5em",
  m = ".75em",
  l = "1em",
  xl = "1.25em",
}

enum WEIGHTS {
  hairline = "100",
  thin = "200",
  light = "300",
  normal = "400",
  medium = "500",
  semibold = "600",
  bold = "700",
  extrabold = "800",
  black = "900",
}

enum RADII {
  xs = ".25em",
  s = ".5em",
  m = ".75em",
  l = "1em",
  xl = "1.25em",
}

export { COLOR, PADDING, MARGIN, RADII, WEIGHTS };
