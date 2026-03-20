import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header
      className={styles.header}
    >
      <img
        alt="Background Image"
        src="/bg-header-mobile.svg"
        className={styles.bg_image}
      />
    </header>
  );
};
