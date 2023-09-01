import { createStitches } from "@stitches/react";

export const { config, styled, css, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gray800: "#676767",
      gray700: "#777777",
      gray500: "#E4E4E4",
      gray100: "#F4F4F4",
      orange: "#F2AF02",
    },

    fontSizes: {
      sm: "0.65rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
