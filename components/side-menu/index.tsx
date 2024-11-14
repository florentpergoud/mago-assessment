import {
  closeButton,
  sideMenuContainer,
  sideMenuContainerOpened,
} from "./styles.css";
import { ThemeButton } from "../theme-button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SideMenu = ({ isOpen, onClose, children }: Props) => {
  const isOpenClass = isOpen ? sideMenuContainerOpened : sideMenuContainer;
  return (
    <div className={isOpenClass}>
      <ThemeButton onPress={onClose} className={closeButton}>
        X
      </ThemeButton>
      {children}
    </div>
  );
};
