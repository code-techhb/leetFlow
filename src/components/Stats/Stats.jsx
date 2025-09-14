import styles from "./Stats.module.css";

const Stats = ({ stats }) => {
  const total =
    stats.problems + stats.solvedOnce + stats.reviewed + stats.mastered;

  return (
    <footer className={styles.footer}>
      <div className={styles.statsContainer}>
        <span className={styles.totalProblems}>
          Total: <strong>{total}</strong> problems
        </span>
        <div className={styles.statsBreakdown}>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{stats.problems}</span> Planned
          </span>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{stats.solvedOnce}</span> Solved
            Once
          </span>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{stats.reviewed}</span> Reviewed
          </span>
          <span className={styles.statItem}>
            <span className={styles.statNumber}>{stats.mastered}</span> Mastered
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Stats;
