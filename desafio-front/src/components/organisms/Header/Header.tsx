import logo from "../../../assets/images/sge-logo-transparent.png";
import { Navbar } from "../../molecules/NavBar/Navbar";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-link"]}>
        <Navbar />
      </div>
      <div className={styles["header-logo"]}>
        <a href="/" className={styles["header-logo__link"]}>
          <img
            src={logo}
            alt="Logo SGE"
            className={styles["header-logo__img"]}
          />
        </a>
      </div>
    </header>
  );
};

export { Header };
