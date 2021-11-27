import Drawer from "./Drawer";
import s from "./styles/Navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className={s.navbar}>
        <div className={s.navbarLeft}>
          <a
            href="https://www.instagram.com/clinicadentalboreal/"
            rel="noreferrer"
            target="_blank"
            className={s.navbarLink}
          >
            <span className={s.navbarLinkText}>Boreal</span>
            <div className={s.navbarLogoContainer}>
              <Image
                className={s.navbarLogo}
                src="/Logo.svg"
                alt="hero"
                width={50}
                height={50}
                priority
              />
            </div>
          </a>
        </div>
        <div className={s.navbarRight}>
          <Drawer /> 
        </div>
      </div>
    </>
  );
}

export default Navbar;