import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spaces[3],
  paddingInline: theme.spaces[3],
  paddingBlock: theme.spaces[4],
});

export const panelHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const panelHeaderTitle = style({
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.mainColors.primary,
});

export const thumbnailsList = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: theme.spaces[3],
});

export const thumbnailItem = style({
  width: "10rem",
  height: "6rem",
  backgroundColor: theme.colors.mainColors.secondary,
  borderRadius: theme.radii.smallCorner,
});
