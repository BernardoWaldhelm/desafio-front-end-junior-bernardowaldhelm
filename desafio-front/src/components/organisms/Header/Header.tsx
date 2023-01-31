import logo from "../../../assets/images/sge-logo-transparent.png";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-link"]}>
        <nav className={styles["header-link__list"]}>
          <a
            href="/listadegatos"
            className={styles["header-link__list__items-menu"]}
          >
            Lista de Gatos
          </a>
          <a
            href="/formulario"
            className={styles["header-link__list__items-menu"]}
          >
            Formulário
          </a>
        </nav>
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
