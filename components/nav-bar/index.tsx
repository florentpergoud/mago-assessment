import Link from "next/link";
import Image from "next/image";
import { logoContainer, navContainer, navLink } from "./styles.css";

export const NavBar = () => {
  return (
    <div className={navContainer}>
      <div className={logoContainer}>
        <Image src="/logo.svg" alt="logo" width={77} height={20} />
      </div>
      <Link href="/" className={navLink} data-active={true}>
        Projects
      </Link>
    </div>
  );
};
