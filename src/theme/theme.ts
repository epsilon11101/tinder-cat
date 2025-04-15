"use client";

import {
  createTheme,
  Palette,
  PaletteColor,
  responsiveFontSizes,
} from "@mui/material/styles";

export type PaletteKey = keyof {
  [Key in keyof Palette as Palette[Key] extends PaletteColor
    ? Key
    : never]: true;
};

const themeDefinition = createTheme({
  typography: {
    fontFamily: "var(--font-roboto), sans-serif",
    h1: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
    h2: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
    h3: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
    h4: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
    h5: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
    h6: {
      fontFamily: "var(--font-poppins), sans-serif",
    },
  },
  palette: {
    background: {
      default: "#F0F3F8",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#5675F7",
    },
    secondary: {
      main: "#E4E9FE",
    },
    error: {
      main: "#E74C3C",
    },
    success: {
      main: "#27AE60",
    },
    warning: {
      main: "#F39C12",
    },
    info: {
      main: "#3498DB",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#7F8C8D",
    },
  },
});

export const theme = responsiveFontSizes(themeDefinition);
