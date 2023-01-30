import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import { useState, useEffect } from "react";

export const breakpoints = { sx: 0, sm: 600, md: 900, lg: 1200, lx: 1536 };
//const aligns = ["center", "start", "end"];
//const marginSymbols = ["m", "mb", "mt", "mx", "ml", "mr", "my"];

export const useBaseStyles = () => ({});

export const useTheme = () => {
  const [themeState, setThemeState] = useState<boolean>(true);
  const [theme, setTheme] = useState<Theme>(createTheme(themeLight));

  useEffect(() => {
    setTheme(themeState ? themeLight : themeDark);
  }, [themeState]);

  return { theme, themeState, setThemeState };
};

export const themeLight = createTheme({
  palette: {
    primary: { main: "#8000FF", light: "#392B77D4" /*"#392B774D"*/, dark: "#070A21" },
    secondary: { main: "#985538", dark: "#211725" },
    background: {
      default: "#392B77",
      paper: "black",
    },
    text: {
      primary: "#fff",
      secondary: "#CA5EFF",
      disabled: "#232323",
    },
  },
});

export const themeDark = createTheme({
  palette: {
    primary: { main: "#8000FF" },
    secondary: { main: "#985538" },
    background: {
      default: "#E5E5E5",
    },
  },
});
