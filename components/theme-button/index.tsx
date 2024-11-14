import { Button } from "react-aria-components";
import { themeButton, themeButtonOutline } from "./styles.css";
import { ButtonProps } from "react-aria-components";

interface Props extends ButtonProps {
  children: React.ReactNode;
  outline?: boolean;
}

export const ThemeButton = ({ children, outline, ...props }: Props) => {
  const className =
    (outline ? themeButtonOutline : themeButton) + " " + props.className;

  return (
    <Button {...props} className={className}>
      {children}
    </Button>
  );
};
