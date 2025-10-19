import styles from "./KanbanBtn.module.css";

const KanbanBtn = ({
  toggleModal,
  onClearAll,
  onResetProgress,
  searchQuery,
  onSearchChange,
  hasProblems,
  hasProgress,
}) => {
  return (
    <div className={styles.buttonGroup}>
      <button className={styles.addBtn} onClick={toggleModal}>
        ➕ Add New LC Problem
      </button>

      <button
        className={`${styles.resetBtn} ${!hasProgress ? styles.disabled : ""}`}
        onClick={onResetProgress}
        disabled={!hasProgress}
      >
        🔄 Reset Progress
      </button>

      <button
        className={`${styles.clearBtn} ${!hasProblems ? styles.disabled : ""}`}
        onClick={onClearAll}
        disabled={!hasProblems}
      >
        🗑️ Clear All
      </button>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="🔍 It's a search away.."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
          disabled={!hasProblems}
        />
        {searchQuery && hasProblems && (
          <button
            className={styles.clearSearch}
            onClick={() => onSearchChange("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default KanbanBtn;
