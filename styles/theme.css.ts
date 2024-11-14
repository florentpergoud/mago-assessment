// Import fonts
import {
  createGlobalTheme,
  globalFontFace,
  globalStyle,
} from "@vanilla-extract/css";

globalFontFace("Lato", {
  src: 'url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap")',
});

// Create the global theme
export const theme = createGlobalTheme(":root", {
  colors: {
    neutralColors: {
      background: "#0C0C0C",
    },
    mainColors: {
      primary: "#D1D1C9",
      primaryActive: "#1A1A1A",
    },
  },
  linearGradients: {
    border: `linear-gradient(90deg, #FFFFFF 12%, #FFFFFF 0%)`,
  },
  fonts: {
    main: "Lato, sans-serif",
  },
  fontSizes: {
    3: "1rem", // 16px
    4: "1.25rem", // 20px
  },
  fontWeights: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  spaces: {
    px: "1px", // 1px
    0.5: "0.125rem", // 2px
    1: "0.25rem", // 4px
    1.5: "0.375rem", // 6px
    2: "0.5rem", // 8px
    2.5: "0.625rem", // 10px
    3: "0.75rem", // 12px
    3.5: "0.875rem", // 14px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    7: "1.75rem", // 28px
    8: "2rem", // 32px
    9: "2.25rem", // 36px
    10: "2.5rem", // 40px
    11: "2.75rem", // 44px
    12: "3rem", // 48px
    14: "3.5rem", // 56px
    16: "4rem", // 64px
    20: "5rem", // 80px
    24: "6rem", // 96px
    28: "7rem", // 112px
    32: "8rem", // 128px
    36: "9rem", // 144px
    40: "10rem", // 160px
    44: "11rem", // 176px
    48: "12rem", // 192px
    100: "25rem", // 400px
    120: "30rem", // 480px
    160: "40rem", // 640px
  },
  radii: {
    verySmallCorner: "0.25rem", // 4px
    smallCorner: "0.5rem", // 8px
    largeCorner: "1.5rem", // 24px
    full: "9999px",
  },
});

// Global styles

globalStyle("body", {
  backgroundColor: theme.colors.neutralColors.background,
  fontFamily: theme.fonts.main,
});
