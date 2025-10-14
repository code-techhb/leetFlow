import ProblemItem from "../ProblemItem/ProblemItem";
import styles from "./Card.module.css";

const Card = ({
  title,
  recommendation,
  problems,
  onMoveProblem,
  onDeleteProblem,
  actionType,
  actionText,
  nextStatus,
}) => {
  return (
    <article className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.recommendation}>{recommendation}</p>
        </div>
        <div className={styles.progressInfo}>
          <span className={styles.progressText}>{problems.length}</span>
        </div>
      </header>
      <div className={styles.items}>
        {problems.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Practice some Leetcode 🤓</p>
          </div>
        ) : (
          problems.map((problem) => (
            <ProblemItem
              key={problem.id}
              problem={problem}
              onMoveProblem={onMoveProblem}
              onDeleteProblem={onDeleteProblem}
              actionType={actionType}
              actionText={actionText}
              nextStatus={nextStatus}
            />
          ))
        )}
      </div>
    </article>
  );
};

export default Card;
