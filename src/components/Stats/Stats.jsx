import styles from "./Stats.module.css";

const Stats = () => {
  return (
    <footer className={styles.footer}>
      Your Stats:{" "}
      <span>
        <span>(X)</span> Problems planned.
      </span>{" "}
      <span>
        <span>(Y)</span> Problems solved Once.
      </span>{" "}
      <span>
        <span>(W)</span> Problems Reviewed.
      </span>{" "}
      <span>
        <span>(Z)</span> Problems mastered.
      </span>
    </footer>
  );
};

export default Stats;
