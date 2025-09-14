import { useState } from "react";
import styles from "./ProblemItem.module.css";

const ProblemItem = ({
  problem,
  onMoveProblem,
  onDeleteProblem,
  actionType,
  actionText,
  nextStatus,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAction = () => {
    if (nextStatus) {
      onMoveProblem(problem.id, nextStatus);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${problem.title}"?`)) {
      onDeleteProblem(problem.id);
    }
  };

  const getDifficultyClass = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return styles.difficultyEasy;
      case "medium":
        return styles.difficultyMedium;
      case "hard":
        return styles.difficultyHard;
      default:
        return styles.difficultyDefault;
    }
  };

  const renderActionElement = () => {
    switch (actionType) {
      case "solve":
        return (
          <button
            className={styles.solveButton}
            onClick={handleAction}
            title={actionText}
          >
            ✓
          </button>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={handleAction}
            title={actionText}
          />
        );
      case "completed":
        return <span className={styles.completedIcon}>✅</span>;
      default:
        return null;
    }
  };

  return (
    <div
      className={styles.problemItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.problemInfo}>
        <div className={styles.problemHeader}>
          <span className={styles.problemTitle}>{problem.title}</span>
          {isHovered && (
            <button
              className={styles.deleteButton}
              onClick={handleDelete}
              title="Delete problem"
            >
              ×
            </button>
          )}
        </div>

        <div className={styles.problemMeta}>
          <span
            className={`${styles.difficulty} ${getDifficultyClass(
              problem.difficulty
            )}`}
          >
            {problem.difficulty}
          </span>
          {problem.url && (
            <a
              href={problem.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.problemLink}
              onClick={(e) => e.stopPropagation()}
            >
              🔗
            </a>
          )}
        </div>
      </div>

      <div className={styles.actionArea}>{renderActionElement()}</div>
    </div>
  );
};

export default ProblemItem;
