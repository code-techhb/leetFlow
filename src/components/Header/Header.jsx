import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          <span className={styles.emoji}>🧠</span>
          LeetFlow
          <span className={styles.emoji}>👩🏽‍💻</span>
        </h1>
        <p className={styles.subtitle}>
          The solution to your Leetcode Procrastination 😎
        </p>
      </div>
    </header>
  );
};

export default Header;
