import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const themeButton = style({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  padding: 0,
  margin: 0,
  color: theme.colors.mainColors.secondary,
});

export const themeButtonOutline = style({
  border: `1px solid ${theme.colors.mainColors.secondary}`,
  color: theme.colors.mainColors.secondary,
});
