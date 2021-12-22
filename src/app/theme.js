import Color from "color";

// Colors
const primary = Color("#929292");
const accent = Color("#cca27b");
const neutral = Color("#929292");

export const theme = {
  maxWidth: 870,
  colors: {
    // Primary
    primary100: primary.lighten(0.65).hex(),
    primary200: primary.lighten(0.55).hex(),
    primary300: primary.lighten(0.4).hex(),
    primary400: primary.lighten(0.25).hex(),
    primary500: primary.lighten(0).hex(),
    primary600: primary.lighten(-0.2).hex(),
    primary700: primary.lighten(-0.4).hex(),
    primary800: primary.lighten(-0.6).hex(),
    primary900: primary.lighten(-0.8).hex(),
    // Accent
    accent100: accent.lighten(0.65).hex(),
    accent200: accent.lighten(0.6).hex(),
    accent300: accent.lighten(0.4).hex(),
    accent400: accent.lighten(0.25).hex(),
    accent500: accent.lighten(0).hex(),
    accent600: accent.lighten(-0.2).hex(),
    accent700: accent.lighten(-0.4).hex(),
    accent800: accent.lighten(-0.6).hex(),
    accent900: accent.lighten(-0.8).hex(),
  },
  fontSizes: [14, 16, 18, 20, 24, 28, 32],
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    small: "4px",
    regular: "8px",
    medium: "16px",
  },
};
