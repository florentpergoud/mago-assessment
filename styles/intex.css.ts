import { style } from "@vanilla-extract/css";
import { theme } from "./theme.css";

export const pageContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: theme.fonts.main,
  height: "100vh",
  width: "100vw",
});

export const mainArea = style({
  width: "100%",
  flexGrow: 1,
  position: "relative",
});

export const projectsListSideMenu = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spaces[4],
  height: "100%",
});

export const projectsList = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: theme.spaces[1],
  width: "100%",
});

export const createProjectButton = style({
  paddingInline: theme.spaces[5],
});

export const projectListItem = style({
  height: theme.spaces[14],
  color: theme.colors.mainColors.primary,
  width: "100%",
  textAlign: "left",
});

export const projectListItemContent = style({
  width: "100%",
  padding: theme.spaces[3],
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  selectors: {
    "&[data-active='true']": {
      backgroundColor: theme.colors.mainColors.primaryActiveBackground,
    },
  },
});

export const selectedProjectContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

export const selectedProjectThumbnailContainer = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
