import { style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";

export const container = style({
  width: "calc(100vw - 2rem)",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr auto",
});

export const selectedThumbnailContainer = style({
  paddingInline: theme.spaces[3],
  paddingBlock: theme.spaces[20],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const selectedThumbnailStyle = style({
  height: "100%",
  maxHeight: "calc(100vh - 13rem)",
  objectFit: "cover",
  borderRadius: theme.radii.largeCorner,
});
