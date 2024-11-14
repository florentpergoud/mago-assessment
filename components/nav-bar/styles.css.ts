import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const navContainer = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  fontWeight: theme.fontWeights.bold,
  fontSize: theme.fontSizes[6],
});

export const logoContainer = style({
  paddingInline: theme.spaces[4],
  paddingBlock: theme.spaces[3],
});

export const navLink = style({
  paddingInline: theme.spaces[4],
  paddingBlock: theme.spaces[3],
  textDecoration: "none",
  color: theme.colors.mainColors.primary,
  selectors: {
    "&[data-active='true']": {
      backgroundColor: theme.colors.mainColors.primaryActive,
    },
  },
});
