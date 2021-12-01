import { shadeColor } from "./util";

// Colors
const primary = "#1461c7";
const accent = "#eb6c23";
const neutral = "#949191";

export const theme = {
  colors: {
    // Primary
    primary100: shadeColor(primary, 80),
    primary200: shadeColor(primary, 60),
    primary300: shadeColor(primary, 40),
    primary400: shadeColor(primary, 20),
    primary500: shadeColor(primary, 0),
    primary600: shadeColor(primary, -20),
    primary700: shadeColor(primary, -40),
    primary800: shadeColor(primary, -60),
    primary900: shadeColor(primary, -80),
    // Accent
    accent100: shadeColor(accent, 80),
    accent200: shadeColor(accent, 60),
    accent300: shadeColor(accent, 40),
    accent400: shadeColor(accent, 20),
    accent500: shadeColor(accent, 0),
    accent600: shadeColor(accent, -20),
    accent700: shadeColor(accent, -40),
    accent800: shadeColor(accent, -60),
    accent900: shadeColor(accent, -80),
    // Neutral
    neutral100: shadeColor(neutral, 80),
    neutral200: shadeColor(neutral, 60),
    neutral300: shadeColor(neutral, 40),
    neutral400: shadeColor(neutral, 20),
    neutral500: shadeColor(neutral, 0),
    neutral600: shadeColor(neutral, -20),
    neutral700: shadeColor(neutral, -40),
    neutral800: shadeColor(neutral, -60),
    neutral900: shadeColor(neutral, -80),
  },
  fontSizes: [14, 16, 18, 20, 24, 28, 36],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  borderRadius: {
    small: "4px",
    regular: "8px",
    medium: "16px",
  },
};
