import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: theme.fonts.main,
});
