const COLOR = {
  primary: "#37FB26",
  secondary: "#BCBDBD",
  tertiary: "#F8587E",
  screenBackground: "#E1EAE9",
  black: "#000000",
  white: "#FFFFFF",
};

enum SCREEN_HEIGHT {
  quarter = "25vh",
  half = "50vh",
  threeQuarter = "75vh",
  full = "100vh",
}

enum SCREEN_WIDTH {
  quarter = "25vw",
  half = "50vw",
  threeQuarter = "75vw",
  full = "100vw",
}

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

enum FONT_SIZE {
  xs = "0.75rem",
  sm = "0.875rem",
  base = "1rem",
  lg = "1.125rem",
  xl = "1.25rem",
  "2xl" = "1.5rem",
  "3xl" = "1.875rem",
  "4xl" = "2.25rem",
  "5xl" = "3rem",
  "6xl" = "3.75rem",
  "7xl" = "4.5rem",
  "8xl" = "6rem",
  "9xl" = "8rem",
}

enum FONT_WEIGHTS {
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
  l = "25%",
  xl = "1.25em",
}

export {
  COLOR,
  PADDING,
  MARGIN,
  RADII,
  FONT_WEIGHTS,
  FONT_SIZE,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
};
