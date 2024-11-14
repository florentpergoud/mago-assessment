"use client";

import { Button } from "react-aria-components";
import { themeButton, themeButtonOutline } from "./styles.css";
import { ButtonProps } from "react-aria-components";

interface Props extends ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
}

export const ThemeButton = ({
  children,
  outline,
  className,
  ...props
}: Props) => {
  const classNames =
    (outline ? themeButtonOutline : themeButton) + " " + className;

  return (
    <Button {...props} className={classNames}>
      {children}
    </Button>
  );
};
