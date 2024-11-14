import { style } from "@vanilla-extract/css";

export const thumbnailImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const thumbnailContainer = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const deleteOverlay = style({
  zIndex: 1,
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.9)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.2s",
  cursor: "pointer",
  ":hover": {
    opacity: 1,
  },
});

export const deleteButton = style({
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  padding: "8px",
});
