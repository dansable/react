import styles from "./styles.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.copyright}>
          © {currentYear} Restorante
        </div>
      </div>
    </footer>
  );
}
