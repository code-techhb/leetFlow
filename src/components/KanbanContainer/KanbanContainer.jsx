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
  searchQuery,
  onSearchChange,
}) => {
  const cardConfigs = [
    {
      id: "problems",
      title: "Problems",
      status: "problems",
      nextStatus: "solved-once",
      actionType: "solve",
      actionText: "Mark as Solved",
      recommendation: "Ready to start? Let's go 💪🏾!",
    },
    {
      id: "solved-once",
      title: "Solved Once",
      status: "solved-once",
      nextStatus: "reviewed",
      actionType: "checkbox",
      actionText: "Mark as Reviewed",
      recommendation: "Come back in 2-3 days to lock it in 🔒!",
    },
    {
      id: "reviewed",
      title: "Review",
      status: "reviewed",
      nextStatus: "mastered",
      actionType: "checkbox",
      actionText: "Mark as Mastered",
      recommendation: "Final push in 1-2 weeks - you got this 🚀!",
    },
    {
      id: "mastered",
      title: "Mastered",
      status: "mastered",
      nextStatus: null,
      actionType: "completed",
      actionText: "Mastered!",
      recommendation: "Conquered! You're unstoppable 🎉✨!",
    },
  ];

  const hasProgress = problems.some((problem) => problem.status !== "problems");

  return (
    <section className={styles.wrapper}>
      <KanbanBtn
        toggleModal={onToggleModal}
        onClearAll={onClearAll}
        onResetProgress={onResetProgress}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        hasProblems={problems.length > 0}
        hasProgress={hasProgress}
      />

      <div className={styles.kanban}>
        {cardConfigs.map((config) => (
          <Card
            key={config.id}
            title={config.title}
            recommendation={config.recommendation}
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
