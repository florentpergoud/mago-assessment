import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const sideMenuContainer = style({
  height: "100%",
  width: theme.spaces[100],
  position: "absolute",
  left: 0,
  top: 0,
  paddingInline: theme.spaces[3],
  paddingBlock: theme.spaces[12],
  transform: "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  backgroundColor: theme.colors.neutralColors.menuBackground,
});

export const sideMenuContainerOpened = style([
  sideMenuContainer,
  {
    transform: "translateX(0)",
  },
]);

export const closeButton = style({
  position: "absolute",
  right: theme.spaces[3],
  top: theme.spaces[3],
  width: theme.spaces[8],
  height: theme.spaces[8],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
