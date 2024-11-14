import Image from "next/image";
import { logoContainer, navContainer, projectButton } from "./styles.css";
import { ThemeButton } from "../theme-button";

interface Props {
  onProjectPress: () => void;
}

export const NavBar = ({ onProjectPress }: Props) => {
  return (
    <div className={navContainer}>
      <div className={logoContainer}>
        <Image src="/logo.svg" alt="logo" width={77} height={20} />
      </div>
      <ThemeButton onPress={onProjectPress} className={projectButton}>
        Projects
      </ThemeButton>
    </div>
  );
};
