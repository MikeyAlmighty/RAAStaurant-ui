import { COLOR_TYPE } from "./constants.ts";

const COLOR = {
  [COLOR_TYPE.PRIMARY]: "#37FB26",
  [COLOR_TYPE.SECONDARY]: "#BCBDBD",
  [COLOR_TYPE.TERTIARY]: "#F8587E",
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

const RADII = {
  xs: ".25em",
  s: ".5em",
  m: ".75em",
  l: "1em",
  xl: "1.25em",
};

export { COLOR, PADDING, MARGIN, RADII };
