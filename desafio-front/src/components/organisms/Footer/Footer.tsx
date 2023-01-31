import styles from "./Footer.module.scss";
import logo from "../../../assets/images/sge-logo-transparent.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div>
        <a
          href="http://wa.me/5522999644229"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["footer__link"]}
        >
          Entre em Contato
        </a>
      </div>

      <div>
        <img src={logo} alt="Logo SGE" />
      </div>
    </footer>
  );
};

export { Footer };
