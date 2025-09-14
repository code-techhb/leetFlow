import styles from "./KanbanContainer.module.css";
import KanbanBtn from "../KanbanBtn/KanbanBtn";
import Card from "../Card/Card";

const KanbanContainer = ({
  onToggleModal,
  problems,
  onMoveProblem,
  onDeleteProblem,
  onClearAll,
  onResetProgress,
  getProblemsByStatus,
}) => {
  const cardConfigs = [
    {
      id: "problems",
      title: "Problems",
      status: "problems",
      nextStatus: "solved-once",
      actionType: "solve",
      actionText: "Mark as Solved",
    },
    {
      id: "solved-once",
      title: "Solved Once",
      status: "solved-once",
      nextStatus: "reviewed",
      actionType: "checkbox",
      actionText: "Mark as Reviewed",
    },
    {
      id: "reviewed",
      title: "Review",
      status: "reviewed",
      nextStatus: "mastered",
      actionType: "checkbox",
      actionText: "Mark as Mastered",
    },
    {
      id: "mastered",
      title: "Mastered",
      status: "mastered",
      nextStatus: null,
      actionType: "completed",
      actionText: "Mastered!",
    },
  ];
  const hasProgress = problems.some((problem) => problem.status !== "problems");

  return (
    <section className={styles.wrapper}>
      <div className={styles.buttonGroup}>
        <KanbanBtn toggleModal={onToggleModal} />
        <button
          className={`${styles.resetButton} ${
            !hasProgress ? styles.disabled : ""
          }`}
          onClick={onResetProgress}
          disabled={!hasProgress}
        >
          🔄 Reset Progress
        </button>
        <button
          className={`${styles.clearButton} ${
            problems.length === 0 ? styles.disabled : ""
          }`}
          onClick={onClearAll}
          disabled={problems.length === 0}
        >
          🗑️ Clear All
        </button>
      </div>

      <div className={styles.kanban}>
        {cardConfigs.map((config) => (
          <Card
            key={config.id}
            title={config.title}
            problems={getProblemsByStatus(config.status)}
            onMoveProblem={onMoveProblem}
            onDeleteProblem={onDeleteProblem}
            actionType={config.actionType}
            actionText={config.actionText}
            nextStatus={config.nextStatus}
          />
        ))}
      </div>
    </section>
  );
};

export default KanbanContainer;
