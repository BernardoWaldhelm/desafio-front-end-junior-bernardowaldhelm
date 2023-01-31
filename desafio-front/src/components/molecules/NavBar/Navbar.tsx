import { Link } from "react-router-dom";

import styles from "../../organisms/Header/Header.module.scss";

const Navbar = () => {
  return (
    <nav className={styles["header-link__list"]}>
      <Link
        to="/listadegatos"
        className={styles["header-link__list__items-menu"]}
      >
        Lista de Gatos
      </Link>
      <Link
        to="/formulario"
        className={styles["header-link__list__items-menu"]}
      >
        Formulário
      </Link>
    </nav>
  );
};

export { Navbar };
