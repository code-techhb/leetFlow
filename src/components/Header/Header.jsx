import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Leetcode Kanban</h1>
      <p>The solution to your Leetcode Procrastination 😎</p>
    </header>
  );
};

export default Header;
